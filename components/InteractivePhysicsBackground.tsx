import React, { useEffect, useRef } from 'react';

// Use standard window property for Matter as it is imported via CDN in index.html
declare const Matter: any;

export const InteractivePhysicsBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<any>(null);
  const renderRef = useRef<any>(null);
  const runnerRef = useRef<any>(null);
  const mouseBodyRef = useRef<any>(null);
  const groundRef = useRef<any>(null);
  const titleBodiesRef = useRef<any[]>([]);
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Events, Body, Vector } = Matter;

    const getHeroHeight = () => document.getElementById('hero')?.offsetHeight || window.innerHeight;
    const getMetricsHeight = () => document.getElementById('metrics')?.offsetHeight || 0;
    
    const getFullPhysicsHeight = () => {
      return getHeroHeight() + getMetricsHeight();
    };

    const width = window.innerWidth;
    const height = getFullPhysicsHeight();

    // Create engine with original gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 0.3 } 
    });
    
    engine.positionIterations = 6;
    engine.velocityIterations = 6;
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        pixelRatio: window.devicePixelRatio || 1
      }
    });
    renderRef.current = render;

    // Boundaries
    const thickness = 200;
    const heroH = getHeroHeight();
    const metricsH = getMetricsHeight();

    // Initial ground position is at the bottom of the Hero section
    const ground = Bodies.rectangle(width / 2, heroH + thickness / 2, width * 2, thickness, { 
      isStatic: true,
      label: 'ground'
    });
    groundRef.current = ground;

    const leftWall = Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, { isStatic: true });
    const rightWall = Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, { isStatic: true });

    // Mouse tracker body
    const mouseBody = Bodies.circle(0, 0, 40, {
      isStatic: true,
      render: { visible: false },
      collisionFilter: {
        mask: 0x0000 
      }
    });
    mouseBodyRef.current = mouseBody;

    // Function to create a particle batch
    const createParticles = (count: number, startYRange: [number, number], isInitial: boolean = false) => {
      const newParticles: any[] = [];
      const size = 7;
      
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * (startYRange[1] - startYRange[0]) + startYRange[0];
        const shapeType = Math.floor(Math.random() * 4);
        
        let body;
        const commonOptions = {
          friction: 0.01,
          restitution: 0.95,
          frictionAir: 0.01, 
          render: { fillStyle: '#FFFFFF' }
        };

        if (shapeType === 0) {
          body = Bodies.rectangle(x, y, size, size, commonOptions);
        } else if (shapeType === 1) {
          body = Bodies.polygon(x, y, 3, size, commonOptions);
        } else if (shapeType === 2) {
          body = Bodies.circle(x, y, size / 2, commonOptions);
        } else {
          const part1 = Bodies.rectangle(x, y, size, size / 3, commonOptions);
          const part2 = Bodies.rectangle(x, y, size / 3, size, commonOptions);
          body = Body.create({
            parts: [part1, part2],
            ...commonOptions,
            position: { x, y }
          });
        }
        newParticles.push(body);
      }
      return newParticles;
    };

    // Initial spawn
    const initialCount = width < 768 ? 400 : 1200;
    const initialParticles = createParticles(initialCount, [-200, heroH * 0.8], true);
    particlesRef.current = initialParticles;

    const updateTitlePhysics = () => {
      if (titleBodiesRef.current.length > 0) {
        Composite.remove(engine.world, titleBodiesRef.current);
        titleBodiesRef.current = [];
      }

      const elements = document.querySelectorAll('.physics-char');
      const newTitleBodies: any[] = [];

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && containerRect) {
          const body = Bodies.rectangle(
            rect.left - containerRect.left + rect.width / 2,
            rect.top - containerRect.top + rect.height / 2,
            rect.width * 0.9,
            rect.height * 0.8,
            { isStatic: true, render: { visible: false } }
          );
          newTitleBodies.push(body);
        }
      });

      titleBodiesRef.current = newTitleBodies;
      Composite.add(engine.world, newTitleBodies);
    };

    Composite.add(engine.world, [ground, leftWall, rightWall, mouseBody, ...initialParticles]);

    // Radial Repulsion Logic
    const repulsionRadius = 180;
    const repulsionStrength = 0.005;

    Events.on(engine, 'beforeUpdate', () => {
      const mousePos = mouseBody.position;
      if (mousePos.x === 0 && mousePos.y === 0) return;

      const currentParticles = particlesRef.current;
      for (let i = 0; i < currentParticles.length; i++) {
        const p = currentParticles[i];
        const distanceVector = Vector.sub(p.position, mousePos);
        const distanceSq = Vector.magnitudeSquared(distanceVector);

        if (distanceSq < repulsionRadius * repulsionRadius) {
          const distance = Math.sqrt(distanceSq);
          if (distance < 1) continue;
          const forceMagnitude = (1 - distance / repulsionRadius) * repulsionStrength;
          const force = Vector.mult(Vector.normalise(distanceVector), forceMagnitude * p.mass);
          Body.applyForce(p, p.position, force);
        }
      }
    });

    const handleSpawnRequest = () => {
      const newBatchCount = 400;
      const newBatch = createParticles(newBatchCount, [-250, -50], false);
      particlesRef.current = [...particlesRef.current, ...newBatch];
      Composite.add(engine.world, newBatch);
    };

    window.addEventListener('spawn-particles', handleSpawnRequest);

    setTimeout(updateTitlePhysics, 500);

    const handleScroll = () => {
      if (!groundRef.current) return;
      const scrollY = window.scrollY;
      const heroH = getHeroHeight();
      const metricsH = getMetricsHeight();
      const maxH = heroH + metricsH;

      const viewportBottom = scrollY + window.innerHeight;
      const newGroundY = Math.max(heroH, Math.min(maxH, viewportBottom));
      
      Body.setPosition(groundRef.current, { 
        x: width / 2, 
        y: newGroundY + thickness / 2 
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      Body.setPosition(mouseBody, { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      handleScroll();
      updateTitlePhysics();
    });

    const runner = Runner.create({ isFixed: true, delta: 1000 / 60 });
    Runner.run(runner, engine);
    Render.run(render);
    runnerRef.current = runner;

    return () => {
      window.removeEventListener('spawn-particles', handleSpawnRequest);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'black', height: '100%' }}
    >
      <canvas ref={canvasRef} className="w-full" />
    </div>
  );
};
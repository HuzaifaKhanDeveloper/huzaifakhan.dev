'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  type: 'normal' | 'data' | 'energy';
  driftRadius: number;
}

interface HexGrid {
  x: number;
  y: number;
  size: number;
  opacity: number;
  pulse: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const hexGridRef = useRef<HexGrid[]>([]);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      // Reduced particle count for better performance
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      
      const colors = [
        '#8B5CF6', '#A855F7', '#C084FC', '#DDD6FE', 
        '#E879F9', '#F3E8FF', '#9333EA', '#7C3AED'
      ];
      
      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.8 ? 'normal' : Math.random() < 0.9 ? 'data' : 'energy';
        const baseX = Math.random() * canvas.width;
        const baseY = Math.random() * canvas.height;
        
        particles.push({
          x: baseX,
          y: baseY,
          baseX: baseX,
          baseY: baseY,
          size: type === 'energy' ? Math.random() * 3 + 1.5 : Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.6 + 0.3,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          type,
          driftRadius: type === 'energy' ? 15 : 8 // Reduced drift for more static feel
        });
      }
      
      particlesRef.current = particles;
    };

    const createHexGrid = () => {
      const hexagons: HexGrid[] = [];
      const hexSize = 50;
      const rows = Math.ceil(canvas.height / (hexSize * 1.5)) + 1;
      const cols = Math.ceil(canvas.width / (hexSize * Math.sqrt(3))) + 1;
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * Math.sqrt(3) + (row % 2) * hexSize * Math.sqrt(3) / 2;
          const y = row * hexSize * 1.5;
          
          if (Math.random() < 0.05) { // Even fewer hexagons for cleaner look
            hexagons.push({
              x,
              y,
              size: hexSize * (0.6 + Math.random() * 0.3),
              opacity: Math.random() * 0.2 + 0.05,
              pulse: Math.random() * Math.PI * 2
            });
          }
        }
      }
      
      hexGridRef.current = hexagons;
    };

    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + Math.cos(angle) * size;
        const hy = y + Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };

    const animate = () => {
      timeRef.current += 0.016;
      
      // Smooth background clear
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Subtle gradient overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(15, 3, 32, 0)');
      gradient.addColorStop(0.5, 'rgba(26, 11, 61, 0.05)');
      gradient.addColorStop(1, 'rgba(30, 27, 75, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw hexagon grid with minimal animation
      hexGridRef.current.forEach((hex) => {
        hex.pulse += 0.01;
        const pulseOpacity = hex.opacity * (0.7 + Math.sin(hex.pulse) * 0.3);
        
        ctx.strokeStyle = `rgba(139, 92, 246, ${pulseOpacity})`;
        ctx.lineWidth = 0.5;
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#8B5CF6';
        
        drawHexagon(hex.x, hex.y, hex.size);
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
      
      // Update and draw particles with minimal movement
      particlesRef.current.forEach((particle) => {
        // Very subtle drift movement
        const driftX = Math.sin(timeRef.current * 0.5 + particle.baseX * 0.01) * 2;
        const driftY = Math.cos(timeRef.current * 0.3 + particle.baseY * 0.01) * 1.5;
        
        particle.x = particle.baseX + driftX;
        particle.y = particle.baseY + driftY;
        
        // Update pulse
        particle.pulse += particle.pulseSpeed;
        const pulseSize = particle.size * (1 + Math.sin(particle.pulse) * 0.2);
        const pulseOpacity = particle.opacity * (0.8 + Math.sin(particle.pulse) * 0.2);
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = pulseOpacity;
        ctx.shadowBlur = particle.type === 'energy' ? 15 : 8;
        ctx.shadowColor = particle.color;
        ctx.fill();
        
        // Add bright core for energy particles
        if (particle.type === 'energy') {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.globalAlpha = pulseOpacity * 0.8;
          ctx.shadowBlur = 5;
          ctx.shadowColor = '#FFFFFF';
          ctx.fill();
        }
        
        ctx.shadowBlur = 0;
      });
      
      // Minimal connections between nearby particles
      ctx.globalAlpha = 0.15;
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1, i + 5).forEach((otherParticle) => { // Limit connections for performance
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            const connectionStrength = 1 - distance / 80;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${connectionStrength * 0.3})`;
            ctx.lineWidth = connectionStrength;
            ctx.stroke();
          }
        });
      });
      
      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    createHexGrid();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createHexGrid();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      {/* Subtle scanline effect */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 92, 246, 0.02) 2px,
            rgba(139, 92, 246, 0.02) 4px
          )`
        }}
      />
      {/* Atmospheric gradient overlay */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[2]"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.02) 0%, transparent 70%)
          `
        }}
      />
    </>
  );
};
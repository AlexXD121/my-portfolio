'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

const AnimatedBackground = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Calculate number of dots based on screen size
    const generateDots = () => {
      const newDots: Dot[] = [];
      const dotCount = Math.floor(window.innerWidth * window.innerHeight / 10000); // Increased dot count
      
      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100, // percentage of screen width
          y: Math.random() * 100, // percentage of screen height
          size: Math.random() * 3 + 1, // size between 1-4px
          delay: Math.random() * 5, // random delay for animation
          duration: Math.random() * 3 + 3, // duration between 3-6s
          opacity: Math.random() * 0.5 + 0.3, // random opacity between 0.3-0.8
        });
      }
      
      setDots(newDots);
    };

    generateDots();

    // Regenerate dots on window resize
    const handleResize = () => {
      generateDots();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to create continuous snowfall effect
  const updateDotPositions = () => {
    setDots(prevDots => {
      return prevDots.map(dot => {
        // Create a new y position that's slightly lower
        const newY = dot.y + 0.1;
        
        // If the dot has moved off screen, reset it to the top with a new x position
        if (newY > 100) {
          return {
            ...dot,
            y: -5, // Start slightly above the viewport
            x: Math.random() * 100,
          };
        }
        
        // Otherwise, just update the y position
        return {
          ...dot,
          y: newY,
        };
      });
    });
  };

  // Set up the animation loop with requestAnimationFrame for better performance
  useEffect(() => {
    let lastTime = 0;
    const fps = 30; // Limit to 30 frames per second for performance
    const fpsInterval = 1000 / fps;
    
    const animate = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > fpsInterval) {
        lastTime = timestamp - (elapsed % fpsInterval);
        updateDotPositions();
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current as unknown as number);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            boxShadow: '0 0 5px rgba(16, 185, 129, 0.5)',
          }}
          animate={{
            backgroundColor: [
              'rgba(16, 185, 129, 0.7)', // emerald-500 with opacity
              'rgba(255, 255, 255, 0.9)', // white with opacity
              'rgba(16, 185, 129, 0.7)', // back to emerald-500
            ],
            boxShadow: [
              '0 0 5px rgba(16, 185, 129, 0.5)',
              '0 0 8px rgba(255, 255, 255, 0.8)',
              '0 0 5px rgba(16, 185, 129, 0.5)',
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
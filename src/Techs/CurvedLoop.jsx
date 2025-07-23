import React, { useEffect, useRef } from 'react';

const CurvedLoop = ({ marqueeText, speed = 3, curveAmount = 100, direction = 'left', interactive = true, className = '' }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const content = `${marqueeText} ✦ `.repeat(4);
    container.innerHTML = `
      <div class="marquee-content" style="display: flex;">
        <div class="marquee-text ${className}" style="white-space: nowrap; padding-right: 50px;">${content}</div>
        <div class="marquee-text ${className}" style="white-space: nowrap; padding-right: 50px;">${content}</div>
      </div>
    `;

    const marqueeContent = container.querySelector('.marquee-content');
    let position = 0;

    const animate = () => {
      position += speed * (direction === 'left' ? -1 : 1);
      
      // Reset position smoothly
      if (Math.abs(position) >= container.querySelector('.marquee-text').offsetWidth) {
        position = 0;
      }

      marqueeContent.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [marqueeText, speed, direction, className]);

  return (
    <div 
      ref={containerRef} 
      className="overflow-hidden w-full"
      style={{
        WebkitMaskImage: '-webkit-linear-gradient(left, transparent 0%, black 10%, black 90%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    />
  );
};

export default CurvedLoop;

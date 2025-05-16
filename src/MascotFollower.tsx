import React, { useEffect, useRef } from 'react';
import mascot from './assets/nad-mascot.png';
import './MascotFollower.css';

const OFFSET_X = 40; // px to the right of cursor
const OFFSET_Y = 40; // px below cursor

const MascotFollower: React.FC = () => {
    const mascotRef = useRef<HTMLImageElement>(null);
    const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrame: number;
        const follow = () => {
            if (mascotRef.current) {
                const mascot = mascotRef.current;
                // Smoothly interpolate position
                const rect = mascot.getBoundingClientRect();
                const currentX = rect.left;
                const currentY = rect.top;
                const targetX = pos.current.x + OFFSET_X;
                const targetY = pos.current.y + OFFSET_Y;
                const dx = targetX - currentX;
                const dy = targetY - currentY;
                mascot.style.transform = `translate(${currentX + dx * 0.15}px, ${currentY + dy * 0.15}px)`;
            }
            animationFrame = requestAnimationFrame(follow);
        };
        follow();
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <img
            ref={mascotRef}
            src={mascot}
            alt="Nad Mascot"
            className="mascot-follower"
            style={{ position: 'fixed', top: 0, left: 0, zIndex: 10000, pointerEvents: 'none' }}
        />
    );
};

export default MascotFollower; 
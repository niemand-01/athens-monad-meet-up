import React from 'react';
import './FloatingBackground.css';
import athens1 from './assets/athens-58440.jpeg';
import athens2 from './assets/istockphoto-619756548-612x612.jpg';
import athens3 from './assets/istockphoto-1432473824-612x612.jpg';
import athens4 from './assets/istockphoto-1486021653-612x612.jpg';
import athens5 from './assets/istockphoto-1491519914-612x612.jpg';
import athens6 from './assets/istockphoto-2171987283-612x612.jpg';
// Add more imports if you add more images

const images = [
    athens1,
    athens2,
    athens3,
    athens4,
    athens5,
    athens6,
    // Add more images here if you have them
];

const FloatingBackground: React.FC = () => {
    return (
        <div className="floating-bg">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className={`floating-img floating-img-${i % 10}`}
                    alt={`Athens ${i + 1}`}
                />
            ))}
        </div>
    );
};

export default FloatingBackground; 
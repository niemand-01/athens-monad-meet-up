import React from 'react';

interface ImageScrollProps {
    images: string[];
}

const ImageScroll: React.FC<ImageScrollProps> = ({ images }) => {
    // Create a continuous array of images with enough copies for smooth looping
    const continuousImages = [...images, ...images, ...images, ...images, ...images];

    return (
        <div className="image-scroll-container">
            <h2 className="scroll-title">Event backed up by</h2>
            <div className="image-scroll-wrapper">
                <div className="image-scroll">
                    {continuousImages.map((image, index) => (
                        <div
                            key={`img-${index}`}
                            className="scroll-image-item"
                        >
                            <img src={image} alt={`Backer ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageScroll; 
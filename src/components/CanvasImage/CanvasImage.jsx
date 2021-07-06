import React, { useEffect, useRef } from 'react';
import './CanvasImage.scss';

export const CanvasImage = ({ imagePath, width, heigh }) => {
    const canvas = useRef(null);

    const drawImage = () => {
        const context = canvas.current.getContext('2d');
        const image = new Image();
        image.onload = () => {
            context.drawImage(image, 0, 0, width, heigh);
        };
        image.src = imagePath;
    };

    useEffect(() => {
        canvas.current.width = width;
        canvas.current.height = heigh;
        drawImage();
    });

    return <canvas ref={canvas} />;
};

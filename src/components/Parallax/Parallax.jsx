import React, { useEffect, useRef } from 'react';
import './Parallax.scss';

export const Parallax = (props) => {
    const parallaxContainer = useRef(null);
    const movingElement = useRef(null);

    const calcBlockCenter = () => {
        return [
            parallaxContainer.current.offsetWidth / 2,
            parallaxContainer.current.offsetHeight / 2,
        ];
    };

    useEffect(() => {
        let referencePoint = props.center ? calcBlockCenter() : [0, 0];
        const mouseMoveFunc = function (event) {
            const transformX =
                (event.clientX - referencePoint[0]) * props.ratio;

            const transformY =
                (event.clientY - referencePoint[1]) * props.ratio;

            movingElement.current.style.transform = `translate(${transformX}px, ${transformY}px)`;
        };

        window.onresize = (event) => {
            referencePoint = props.center ? calcBlockCenter() : [0, 0];
        };
        if (!('ontouchstart' in document.documentElement)) {
            document.addEventListener('mousemove', mouseMoveFunc);
        }
        return () => {
            if (!('ontouchstart' in document.documentElement)) {
                document.removeEventListener('mousemove', mouseMoveFunc);
            }
        };
    }, [props.center, props.ratio]);

    return (
        <div ref={parallaxContainer} className='parallax'>
            <div className='parallax__wrapper'>
                <div ref={movingElement} className='parallax__moving-element'>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

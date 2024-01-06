import { useState, useEffect } from 'react';

const Proximamente = () => {
    const [backgroundColor, setBackgroundColor] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    useEffect(() => {
        const intervalColor = setInterval(() => {
            setBackgroundColor((prevColor) => (prevColor + 1) % 3);
        }, 2000);

        const intervalZoom = setInterval(() => {
            setIsZoomed((prevZoom) => !prevZoom);
        }, 1000);

        return () => {
            clearInterval(intervalColor);
            clearInterval(intervalZoom);
        };
    }, []);

    const colors = ['#FFC0CB', '#ADD8E6', '#98FB98'];
    const zoomFactor = isZoomed ? 1.2 : 1;

    const textStyle = {
        fontSize: `${24 * zoomFactor}px`,
        fontWeight: 'bold',
        color: '#333',
        transform: `scale(${zoomFactor})`, // Eliminada la rotación
        transition: 'transform 1s ease, font-size 1s ease',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: colors[backgroundColor],
        transition: 'background 1s ease',
    };

    return (
        <div style={containerStyle}>
            <div style={textStyle}>PRÓXIMAMENTE</div>
        </div>
    );
};

export default Proximamente;

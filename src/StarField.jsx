import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarField = () => {
    return (
        <Canvas style={{ height: '100vh', background: 'black' }}>
            <Stars
                radius={100}
                depth={100}
                count={5000}
                fade={true}
                factor={10}
                saturation={1}
            />
        </Canvas>
    );
};

export default StarField;
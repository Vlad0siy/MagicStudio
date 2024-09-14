import '../App.css';
import Starfield from "react-starfield";
import React from "react";

const StarField = () => {
    return (
        <div>
            <Starfield
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />
        </div>
    );
};

export default StarField;
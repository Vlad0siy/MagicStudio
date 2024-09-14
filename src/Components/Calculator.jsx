import React, {useState} from 'react';
import '../App.css'

const Calculator = () => {
    const [daySlider, setDaySliderValue] = useState(7); // Initial value for the slider
    const [hourSlider, setHourSliderValue] = useState(12); // Initial value for the slider
    const [engSlider, setEngSliderValue] = useState(3); // Initial value for the slider

    const handleDaySliderChange = (event) => {
        setDaySliderValue(event.target.value);
    };

    const handleHourSliderChange = (event) => {
        setHourSliderValue(event.target.value);
    };

    const handleEngSliderChange = (event) => {
        setEngSliderValue(event.target.value);
    };
    
    return (
        <div className="calc">
            <div className="calc__inner">
                <div className="calc__days">
                    <div className="calc__quest">
                        <p>Сколько дней в неделю хотите работать?</p>
                    </div>
                    <div className="calc__numbs">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                    </div>
                    <div className="calc__range days">
                        <div className="slider-container">
                            <input
                                step={1}
                                type="range"
                                min="1"
                                max="7"
                                value={daySlider}
                                onChange={handleDaySliderChange}
                                className="slider"
                            />
                        </div>
                    </div>
                </div>
                <div className="calc__hours">
                    <div className="calc__quest">
                        <p>Сколько часов в день?</p>
                    </div>
                    <div className="calc__numbs">
                        <span>3</span>
                        <span>6</span>
                        <span>9</span>
                        <span>12</span>
                    </div>
                    <div className="calc__range hours">
                        <div className="slider-container">
                            <input
                                step={3}
                                type="range"
                                min="1"
                                max="12"
                                value={hourSlider}
                                onChange={handleHourSliderChange}
                                className="slider"
                            />
                        </div>
                    </div>
                </div>
                <div className="calc__level">
                    <div className="calc__quest">
                        <p>Ваш уровень английского?</p>
                    </div>
                    <div className="calc__numbs">
                        <span>Базовый</span>
                        <span>Средний</span>
                        <span>Разговорный</span>
                    </div>
                    <div className="calc__range level range">
                        <div className="slider-container">
                            <input
                                step={1}
                                type="range"
                                min="1"
                                max="3"
                                value={engSlider}
                                onChange={handleEngSliderChange}
                                className="slider"
                            />
                        </div>
                    </div>
                </div>
                <div className="calc__order">
                    <div className="calc__res">
                        <p>Еженедельный заработок</p>
                        <span>${214 * daySlider + 125 * hourSlider + 500 * engSlider}</span>
                    </div>
                    <div className="calc__button">
                        <button className="calc__btn btn" data-hystmodal="#formStatement">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
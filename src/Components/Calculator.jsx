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

    const engLevelValue = ["", "Базовый", "Средний", "Разговорный"]
    
    return (
        <div className="calc">
            <div className="calc_inner">
                <div className="calc_days">
                    <div className="calc_quest">
                        <p>Сколько дней в неделю хотите работать?</p>
                    </div>
                    <div className="calc_numbs">
                        {daySlider}
                    </div>
                    <div className="calc_range days">
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
                <div className="calc_hours">
                    <div className="calc_quest">
                        <p>Сколько часов в день?</p>
                    </div>
                    <div className="calc_numbs">
                        {hourSlider}
                    </div>
                    <div className="calc_range hours">
                        <div className="slider-container">
                            <input
                                step={3}
                                type="range"
                                min="3"
                                max="12"
                                value={hourSlider}
                                onChange={handleHourSliderChange}
                                className="slider"
                            />
                        </div>
                    </div>
                </div>
                <div className="calc_level">
                    <div className="calc_quest">
                        <p>Ваш уровень английского?</p>
                    </div>
                    <div className="calc_numbs">
                        {engLevelValue[engSlider]}
                    </div>
                    <div className="calc_range level range">
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
                <div className="calc_order">
                    <div className="calc_res">
                        <p>Еженедельный заработок</p>
                        <span>${214 * daySlider + 125 * hourSlider + 500 * engSlider}</span>
                    </div>
                    <div className="calc_button">
                        <button className="calc__btn btn" data-hystmodal="#formStatement">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
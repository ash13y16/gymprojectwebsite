import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Slideshow = () => {
    const items = [
        { day: "Sunday",
            type: "Chest & Triceps",
            exercises: ["Bench Press", "Shoulder Press"] },
        { day: "Monday",
            type: "Back & Biceps",
            exercises: ["Pull Ups"] }
    ];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + items.length) % items.length);
    };

    //Button for workoutpage
    const navigate = useNavigate();

    const goToWorkout = () => {
        navigate("/workout");
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <button onClick={prevSlide}>
                &lt;
            </button>
            <div className={'card'}>
                <i><h2>{items[current].day}</h2></i>
                <h3>{items[current].type}</h3>
                <ul>
                    {items[current].exercises.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
                <button className={'startButton'} onClick={goToWorkout}>
                    Start
                </button>
            </div>
            <button onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slideshow;

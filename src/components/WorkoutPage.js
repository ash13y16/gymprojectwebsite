import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import './styles.css';

function WorkoutPage() {

    //Button for exiting
    const navigate = useNavigate();

    const exit = () => {
        navigate("/");
    };

    //Timer
    function Timer() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (count >= 600) return;

            const timer = setInterval(() => {
                setCount((prev) => prev + 1);
            }, 1000)

            return () => clearInterval(timer);
        }, [count])

        const min = Math.floor(count / 60);
        const secs = count % 60;
        const formatted = `${min}:${secs.toString().padStart(2, "0")}`;

        return <h1>{formatted}</h1>
    }

    return (
        <div className={'WorkoutPage'}>
            <button className={'exitButton'} onClick={exit}>
                x
            </button>
            <h1>Exercise Name</h1>
            <div style={{display: "flex", justifyContent: 'space-between', width: '200px'}}>
                <h2>Sets</h2>
                <h2>Reps</h2>
            </div>
            <Timer />
            <button className={'startButton'} style={{position: "relative", bottom: 0}}>
                Start
            </button>
        </div>
    );
}

export default WorkoutPage;

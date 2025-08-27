import './styles.css';
import {useNavigate} from "react-router-dom";

function WorkoutPage() {

    //Button for exiting
    const navigate = useNavigate();

    const exit = () => {
        navigate("/");
    };

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
            <button className={'restTimer'}>
                Rest
            </button>
            <button className={'startButton'} style={{position: "relative", bottom: 0}}>
                Start
            </button>
        </div>
    );
}

export default WorkoutPage;

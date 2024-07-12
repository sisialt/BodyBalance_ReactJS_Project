import baby from './baby-power2.jpg';
import './WorkoutDetails.css';
import close from './close.png'

export default function WorkoutDetails({
    workout,
    onClose,
}) {

    console.log(workout)
    return (
        <>
            
            <div className="overlay">
            
                <div className="backdrop" onClick={onClose}></div>
                
                <div >
                
                    <div className="detail-container">
                        <header className="headers">
                            <h2>Workout</h2>
                            <button className="btn close" onClick={onClose}>
                                <img src={close} alt="" width={30} height={30} />
                            </button>
                        </header>
                        <div className="content">
                            <div className="image-container">
                                <img src={baby} alt=""
                                    className="image" />
                            </div>
                            <div className="user-details">
                                <p><strong>{workout.name}</strong></p>
                                <p>
                                    Description: {workout.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
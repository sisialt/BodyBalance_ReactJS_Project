import './Workout.css';

export default function Workout({
    workout,
    onClick,
    onChange,
}) {

    return (
        <div className="col-md-4 mb-3">
            <a className="recent-work card border-0 shadow-lg overflow-hidden" onClick={() => {onClick(), onChange()}}>
                <img id="workout-img" className="recent-work-img card-img" src={workout.img} alt="Card image" />
                <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                    <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                        <h3 className="card-title light-300">{workout.name}</h3>
                        <p className="card-text">{workout.info}</p>
                    </div>
                </div>
            </a>
        </div>

    );
}
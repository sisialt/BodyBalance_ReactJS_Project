
import babys from './moms-with-babys2.jpg';
import functional from './mobility2.jpg';
import mobility from './pregnant.jpg'
import './Workout.css';
import close from './close.png'

export default function Workout({
    workout,
    onClick,
    onChange,
}) {
    let imgSrc = '';

    if (workout.img === 'assets/pregnant.jpg') {
        imgSrc = mobility;
    } else if (workout.img === 'assets/mobility2.jpg') {
        imgSrc = functional;
    } else if (workout.img === 'assets/moms-with-babys2.jpg') {
        imgSrc = babys;
    }

    return (
        <div className="col-md-4 mb-3">
            <a className="recent-work card border-0 shadow-lg overflow-hidden" onClick={() => {onClick(), onChange()}}>
                <img id="workout-img" className="recent-work-img card-img" src={imgSrc} alt="Card image" />
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
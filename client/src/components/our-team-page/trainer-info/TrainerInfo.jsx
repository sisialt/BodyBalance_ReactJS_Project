import { useParams } from 'react-router-dom';

import { useGetOneTrainers } from '../../../hooks/useTrainers';

export default function TrainerInfo() {
    const { trainerId } = useParams();
    const [trainer] = useGetOneTrainers(trainerId);

    return (
        <>
            <div style={{ paddingTop: 50, marginLeft: 400, marginRight: 400, marginBottom: 50 }}>
                <h1>{trainer.firstName} {trainer.lastName}</h1>
                <p>{trainer.info}</p>
                <p>Workouts: {trainer.workouts}</p>
                <div className="gallery" >
                    <img src={trainer.img} style={{ maxWidth: 200 }} />
                </div>
            </div>
        </>
    );
}
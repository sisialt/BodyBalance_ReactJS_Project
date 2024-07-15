import Trainers from './trainers/Trainers'
import Workouts from './workouts/Workouts'
import Banner from './banner/Banner'
import Schedule from './schedule/Schedule'
import Comments from './comments/Comments'

export default function Home() {
    return (
        <>
            <Banner />

            <Workouts />

            <Schedule />

            {/* <Trainers /> */}

            <Comments />
        </>
    );
}
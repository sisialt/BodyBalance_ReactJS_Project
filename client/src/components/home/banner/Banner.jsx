import banner from './logo-plus-text.png'
import oneday from './motivation3.jpg'
import group from './mobility.jpg'
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div className="banner-wrapper">
                <div id="index_banner" className="banner-vertical-center-index container container-fluid pt-5 pb-5">
                    <div className='group-workouts shadow-lg'>
                        <div className='flex'>
                            <h1>Discover the Power of Group Workouts with</h1>
                            <img className='banner-group-img' src={banner} alt="" />
                        </div>
                        <img className='banner-group-img2' src={oneday} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}
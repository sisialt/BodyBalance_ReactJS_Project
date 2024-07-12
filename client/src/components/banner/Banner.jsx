import banner from './logo-plus-text.png'
import group from './mobility.jpg'
import './Banner.css'

export default function Banner() {
    return (
        <>
            <div className="banner-wrapper">
                <div id="index_banner" className="banner-vertical-center-index container container-fluid pt-5 pb-5">
                    {/* <div className='pb-5'>
                        <img className='banner-img' src={banner} alt="" />
                    </div> */}

                    <div className='group-workouts shadow-lg'>
                        <h1>Find the power of group workouts</h1>
                        <img className='banner-group-img' src={banner} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}
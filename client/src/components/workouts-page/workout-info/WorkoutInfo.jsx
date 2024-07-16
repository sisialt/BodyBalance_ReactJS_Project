import img2 from './mobility2.jpg'

export default function WorkoutInfo() {
    return (
        <>
            <div style={{paddingTop: 200}}>
                <h1>Mobility</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores quasi provident itaque, nam odit autem officia totam culpa aut nihil deleniti iusto doloribus qui dicta blanditiis modi possimus repellat. Dicta?</p>
                <div className="gallery">
                    <img src={img2}/>
                    <img src={img2}/>
                    <img src={img2}/>
                    <img src={img2}/>
                    <img src={img2}/>
                    <img src={img2}/>
                </div>
            </div>
        </>
    );
}
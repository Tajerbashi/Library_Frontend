import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-lg-3 col-md-4 col-sm-10 p-2'>
                    این ستون اول است
                </div>
                <div className='col-lg-3 col-md-4 col-sm-10 p-2'>
                    این ستون دوم است
                </div>
                <div className='col-lg-3 col-md-4 col-sm-10 p-2'>
                    این ستون سوم است
                </div>
                <div className='col-lg-3 col-md-4 col-sm-10 p-2'>
                    این ستون چهارم است
                </div>
            </div>
        </div>
    );
}

export default About;
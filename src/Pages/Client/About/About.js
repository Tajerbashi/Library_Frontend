import './About.css'
import Wrapper from '../../../Components/HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
const About = () => {
    return (
        <Wrapper>
            <div className='DefaultContainer container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                    <div className='col-12'>
                        <div className='DefaultContainer'>
                            این قسمت در باره ما است که میتوان تمامی عناصر مرتبط درج کنیم
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default About;
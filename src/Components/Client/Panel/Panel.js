import './Panel.css'
import Wrapper from '../../../HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
const Panel = () => {
    return (
        <Wrapper>
            <div className='DefaultContainer container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                    <div className='col-12'>
                        <div className='DefaultContainer'>
                            این قسمت پنل کاربری است که میتوان تمامی عناصر مرتبط درج کنیم
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Panel;
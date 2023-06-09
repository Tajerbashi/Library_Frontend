import './Weblog.css'
import Wrapper from '../../../HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
const WebLog = () => {
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                    <div className='col-12'>
                        <div className='DefaultContainer'>
                            این قسمت وبلاگ است که میتوان تمامی عناصر مرتبط درج کنیم
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default WebLog;
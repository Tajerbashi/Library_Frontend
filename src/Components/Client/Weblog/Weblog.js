import './Weblog.css'
import Wrapper from '../../../HOC/wrapper';
import Input from '../../UI/Input/Input';
import Navbar from '../../Home/Container/Navbar/Navbar';
const WebLog = () => {
    const saveProductHandler = () => {

    }
    return (
        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                    <div className='col-12'>
                        <div className='DefaultContainer'>
                            <form
                                onSubmit={saveProductHandler}
                                className='Form-Container'>
                                <Input 
                                    placeholder='نام را وارد کنید ...'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default WebLog;
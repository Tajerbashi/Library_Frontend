
import Input from '../../Components/UI/Input/Input';
import './Login.css'

import { AuthContext } from '../../Components/Context/AuthContext';
import { useContext } from 'react';
const Login = () => {
    const authContext = useContext(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();
        authContext.login();
    };
    return (
        <div className='container Login-Container'>
            <div className='row Login-Form'>
                <h5>شما برای استفاده از خدمات سایت باید وارد شوید.</h5>
                <form>
                    <Input valid={true} type={'text'} placeholder='نام کاربری را وارد کنید ...' />
                    <Input valid={true} type={'text'} placeholder='رمز کاربری را وارد کنید ...' />
                    <input onClick={loginHandler} type='submit' value={"ورود"} className='btn btn-primary shadow bg-gradient w-50 mt-5' />
                </form>
            </div>
        </div>
    );
}

export default Login;
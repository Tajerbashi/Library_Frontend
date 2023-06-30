import './loginComponent.css'
import { AuthContext } from '../../../Components/Context/AuthContext';
import { useContext } from 'react';

const LoginComponent = () =>{
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
                    <input type='text' className='form-control rounded-2 my-2' placeholder='نام کاربری را وارد کنید ...'/>
                    <input type='text' className='form-control rounded-2 my-2' placeholder='رمز کاربری را وارد کنید ...'/>
                    <input onClick={loginHandler} type='submit' value={"ورود"} className='btn btn-primary shadow bg-gradient w-50 mt-5' />
                </form>
            </div>
        </div>
    );
}

export default LoginComponent;
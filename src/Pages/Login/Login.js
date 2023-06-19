
import Input from '../../Components/UI/Input/Input';
import './Login.css'

const Login = () => {
    return (
        <div className='Login-Container'>
            <div className='Login-Form'>
                <form>
                    <Input type={'text'} placeholder='نام کاربری را وارد کنید ...' />
                    <Input type={'text'} placeholder='رمز کاربری را وارد کنید ...' />
                    <input type='submit' className='btn Link' />
                </form>
            </div>
            <div className='Sign-Form'>
                <form>
                    <Input type={'text'} placeholder='نام کاربری را وارد کنید ...' />
                    <Input type={'text'} placeholder='رمز کاربری را وارد کنید ...' />
                    <input type='submit' className='btn Link' />
                </form>
            </div>
        </div>
    );
}

export default Login;
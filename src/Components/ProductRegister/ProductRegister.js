import React, { useEffect, useState } from 'react'
import Wrapper from '../../Hoc/wrapper';
import './ProductRegister.css'
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
const ProductRegister = (props) => {
    const [fullName, setFullName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName);
        console.log(username);
        console.log(password);
        console.log("Clicked on ProductRegister");
    }

    useEffect(() => {
        console.log(fullName);
        console.log(username);
        console.log(password);
    });
    return (
        <Wrapper>
            <div className='pr-title'>محصول جدید</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <Input
                        type='input'
                        id='fullName'
                        name='fullName'
                        value={fullName}
                        placeholder='نام کامل را وارد کنید ...'
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <Input
                        type='input'
                        id='username'
                        name='username'
                        value={username}
                        placeholder='نام کاربری را وارد کنید ...'
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <Input
                        type='input'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='رمز را وارد کنید ...'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button btnType='yes'
                        click={(e) => handleSubmit(e)}>ذخیره</Button>
                </form>
            </div>
        </Wrapper>
    );
}
export default ProductRegister;
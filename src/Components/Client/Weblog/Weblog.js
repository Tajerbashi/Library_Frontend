import './Weblog.css'
import { useEffect, useState } from 'react';
import Wrapper from '../../../HOC/wrapper';
import Input from '../../UI/Input/Input';
import Navbar from '../../Home/Container/Navbar/Navbar';
import Button from '../../UI/Button/Button';
import Table from '../../UI/Table/Table';
const WebLog = () => {
    //Table Config
    var DataSource = [
        { id:1 ,name: 'کامران', family: 'تاجرباشی', password: '123' },
        { id:2 ,name: 'محمد', family: 'عزیزی', password: '456' },
        { id:3 ,name: 'جواد', family: 'میرزایی', password: '789' },
    ];
    const [data,setData] = useState(DataSource);
    const TableConfig = [
        {
            title: 'نام',
            field: 'name',
            col: 1
        },
        {
            title: 'فامیل',
            field: 'family',
            col: 1
        },
        {
            title: 'گذرواژه',
            field: 'password',
            col: 1
        },
    ];
    const [name, setName] = useState();
    const [family, setFamily] = useState();
    const [password, setPassword] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        let User = {
            name: name,
            family: family,
            password: password
        }
        DataSource = [...data];
        DataSource.push(User);
        setData(DataSource);

    }
    useEffect(() => {
    });

    return (

        <Wrapper>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                </div>
                <div className='DefaultContainer d-flex flex-row justify-align-content-between'>
                    <div className='w-100'>
                        <form
                            onSubmit={submitHandler}
                            className='Form-Container'>
                            <Input
                                onChange={(e) => setName(e.target.value)}
                                placeholder='نام را وارد کنید ...'
                            />
                            <Input
                                onChange={(e) => setFamily(e.target.value)}
                                placeholder='فامیل را وارد کنید ...'
                            />
                            <Input
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='رمز را وارد کنید ...'
                            />
                            <Button
                                click={submitHandler}
                                with='100'
                                btnType='Link'>ذخیره</Button>
                        </form>
                    </div>
                    <div className='w-100 p-3'>
                        <Table
                            TableConfig={TableConfig}
                            DataSource={data}
                        />
                    </div>
                </div>
            </div>
        </Wrapper >
    );
}

export default WebLog;
import './Weblog.css'
import { useEffect, useState } from 'react';
import Wrapper from '../../../HOC/wrapper';
import Input from '../../UI/Input/Input';
import Navbar from '../../Home/Container/Navbar/Navbar';
import Button from '../../UI/Button/Button';
import Table from '../../UI/Table/Table';
import Card from '../../UI/Card/Card';
const WebLog = () => {
    //Table Config
    var DataSource = [
        { id: 1, name: 'کامران', family: 'تاجرباشی', password: '123' },
        { id: 2, name: 'محمد', family: 'عزیزی', password: '456' },
        { id: 3, name: 'جواد', family: 'میرزایی', password: '789' },
    ];
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


    const [valid, setValid] = useState();
    const [data, setData] = useState(DataSource);
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
        if (Validation(User, true)) {
            setValid(true);
            DataSource = [...data];
            DataSource.push(User);
            setData(DataSource);
        }else{
            setValid(false);
        }
    }

    const Validation = (object) => {
        for (var item in object) {
            if(object[item] === undefined){
                console.log("1");
                return false;
            }
            if (object[item].trim() === "" ) {
                console.log("1");
                return false
            }
        }
        return true;
    }
    useEffect(() => {
    });
    const RowHandler = () => {
        console.log("Hello ");
    } 
    return (

        <Wrapper>
            <div className='DefaultContainer container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                </div>
                <div className='d-flex flex-row justify-align-content-between'>
                    <div className='w-100'>
                        <Card>
                            <form
                                onSubmit={submitHandler}
                                className='Form-Container'>
                                <Input
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='نام را وارد کنید ...'
                                    valid={valid}
                                />
                                <Input
                                    onChange={(e) => setFamily(e.target.value)}
                                    placeholder='فامیل را وارد کنید ...'
                                    valid={valid}
                                />
                                <Input
                                    type='password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='رمز را وارد کنید ...'
                                    valid={valid}
                                />
                                <Button
                                    click={submitHandler}
                                    with='100'
                                    btnType='Link'>ذخیره</Button>
                            </form>
                        </Card>
                    </div>
                    <div className='w-100'>
                        <Card>
                            <Table
                                TableConfig={TableConfig}
                                DataSource={data}
                                // RowHandler={RowHandler}
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </Wrapper >
    );
}

export default WebLog;
import './Panel.css'
import Wrapper from '../../../HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
import { useReducer, useState } from 'react'
import Input from '../../UI/Input/Input';
import Table from '../../UI/Table/Table'

const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.product
        case 'ADD':
            return [...state, action.product]
        default:
            throw new Error('Invalid action');
    }
};

const Panel = () => {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [state, dispath] = useReducer(userReducer, []);
    var DataSource = [
        { id: 1, name: 'کامران', family: 'تاجرباشی', password: '123' },
        { id: 2, name: 'محمد', family: 'عزیزی', password: '456' },
        { id: 3, name: 'جواد', family: 'میرزایی', password: '789' },
        { id: 4, name: 'کامران', family: 'میرزایی', password: '789' },
    ];
    const TableConfig = [
        {
            title: 'نام',
            field: 'name',
            col: 1
        },
    ];
    const Create = () => {

    };
    const Read = () => {

    };
    const Update = () => {

    };
    const Delete = () => {

    };
    return (
        <Wrapper>
            <div className='DefaultContainer container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Navbar />
                    </div>
                    <div className='col-12 d-flex flex-row justify-content-between'>
                        <div className='w-100'>
                            <form>
                                <Input
                                    onChange={(e) => { setData(e.target.value) }}
                                />
                            </form>
                        </div>
                        <div className='w-100'>
                            <Table
                                TableConfig={TableConfig}
                                DataSource={DataSource}
                            // RowHandler={RowHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Panel;
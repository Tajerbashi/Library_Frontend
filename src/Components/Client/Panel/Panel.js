import './Panel.css'
import Wrapper from '../../../HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
import { useReducer, useState } from 'react'
import Input from '../../UI/Input/Input';
import Table from '../../UI/Table/Table'
import Card from '../../UI/Card/Card'
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
var DataSource = [
    { id: 1, name: 'کامران' },
    { id: 2, name: 'محمد' },
    { id: 3, name: 'جواد' },
    { id: 4, name: 'کامران' }
];
const TableConfig = [
    {
        title: 'نام',
        field: 'name',
        col: 1
    },
];
const Panel = () => {
    const [users, setUsers] = useState(DataSource);
    const [data, setData] = useState([]);
    const [state, dispath] = useReducer(userReducer, []);
    
    
    const Create = (e) => {
        e.preventDefault();
        setUsers({ data }, ...users);
    };
    const Read = (id) => {
        console.log('Read ID : ', id);
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
                    <div className='col-12 d-flex flex-row '>
                        <div className='w-100 p-2'>
                            <Card>
                                <form>
                                    <Input
                                        placeholder={'کلمه مورد نظر را وارد کنید ...'}
                                        onChange={(e) => { setData(e.target.value) }}
                                    />
                                    <button className='btn btn-primary' onClick={Create}>ذخیره</button>
                                </form>
                            </Card>
                        </div>
                        <div className='w-100 p-2'>
                            <Card>
                                <Table
                                    TableConfig={TableConfig}
                                    DataSource={DataSource}
                                />
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Panel;
import './Panel.css'
import Wrapper from '../../../Components/HOC/wrapper';
import Navbar from '../../Home/Container/Navbar/Navbar';
import { useEffect, useReducer } from 'react'
import Input from '../../../Components/UI/Input/Input';
import Table from '../../../Components/UI/Table/Table'
import Card from '../../../Components/UI/Card/Card'

const useReducerHandler = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.all
        case 'ADD':
            return [...state, action.model]
        default:
            throw new Error('Invalid action');
    }
};

const TableConfig = [
    {
        title: 'نام',
        field: 'name',
        col: 1
    },
];
const Panel = () => {

    const [state, disPath] = useReducer(useReducerHandler, [
        {
            id: 0,
            name: ''
        }
    ]);
    let newModel = {};
    useEffect(() => {
        console.log("UseEffect ::: ", state);
        disPath({
            type: 'SET',
            all: state
        });
    }, [state]);
    const InputHandler = (e) => {
        console.log(e.target.value);
        newModel = e.target.value;
    }
    const Create = (e) => {
        e.preventDefault();
        let id = Math.round(Math.random() * 1000)
        disPath({
            type: 'ADD',
            model: {
                id: id,
                name: newModel
            },
            ...state
        });
        console.log(state);
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
                                        onChange={(e) => InputHandler(e)}
                                    />
                                    <div>
                                        <button className='btn btn-success mx-1'
                                            onClick={Create}>ذخیره</button>
                                        <button className='btn btn-info mx-1'
                                            onClick={Read}>خواندن</button>
                                        <button className='btn btn-danger mx-1'
                                            onClick={Delete}>حذف</button>
                                        <button className='btn btn-warning mx-1'
                                            onClick={Update}>ویرایش</button>
                                    </div>
                                </form>

                            </Card>
                        </div>
                        <div className='w-100 p-2'>
                            <Card>
                                <Table
                                    TableConfig={TableConfig}
                                    DataSource={state}
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
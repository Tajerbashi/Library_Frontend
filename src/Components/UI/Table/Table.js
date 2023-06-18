import './Table.css'
import Row from './Row/Row';
import Input from '../Input/Input';
import { useEffect, useState } from 'react';
const Table = (props) => {
    const [search, setSearch] = useState(props.DataSource);
    const [tbody, setTbody] = useState(0);
    let counter = 1;
    const thead = props.TableConfig.map(item => {
        return <th key={item.field}>{item.title}</th>
    });
    const RowHandler = (id) => {
        console.log("Id : ", id);
    }

    const SearchHandler = (word) => {
        const data = props.DataSource.filter(item => {
            return item.name === word ? item : 0;
        });
        if(data.length > 0) {
            setSearch(data);
        }else{
            setSearch(props.DataSource);
        }
    }
    
    useEffect(() => {
        const timer = setTimeout(() =>{

        },1000);
        let data = search.map(item => {
            counter += 1;
            return <Row
                // click={() => props.RowHandler(item.id)}
                click={() => RowHandler(item.id)}
                key={counter}
                value={item}
                config={props.TableConfig} />

        });
        setTbody(data);
        return () => {
            clearTimeout(timer);
        }
    }, [search]);


    return (
        <div className='Table-Container'>
            <div className='search-Container'>
                <Input
                    placeholder='جستجو کنید ...'
                    valid={true}
                    onChange={(e) => SearchHandler(e.target.value, e.target.value)}
                />
            </div>
            <table className='table table-hover'>
                <thead>
                    <tr>{thead}<th colSpan={2}>عملیات</th></tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
    );
}
export default Table;
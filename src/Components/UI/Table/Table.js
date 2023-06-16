import './Table.css'
import Row from './Row/Row';
const Table = (props) => {
    let counter = 1;
    const thead = props.TableConfig.map(item => {
        return <th key={item.field}>{item.title}</th>
    });
    const RowHandler = (id) => {
        console.log("Id : ", id);
    }
    const tbody = props.DataSource.map(item => {
        counter += 1;
        return <Row
            // click={() => props.RowHandler(item.id)}
            click={() => RowHandler(item.id)}
            key={counter}
            value={item}
            config={props.TableConfig} />

    });
    return (
        <div className='Table-Container'>
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
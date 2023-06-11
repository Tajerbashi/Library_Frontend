import './Table.css'
import Row from './Row/Row';
const Table = (props) => {
    let counter = 1;
    const thead = props.TableConfig.map(item => {
        return <th key={item.field}>{item.title}</th>
    });
    const tbody = props.DataSource.map(item => {
        counter += 1;
        return <Row
            key={counter}
            value={item}
            config={props.TableConfig} />

    });
    return (
        <div>
            <table className='table table-hover'>
                <thead>
                    <tr>{thead}</tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
    );
}
export default Table;
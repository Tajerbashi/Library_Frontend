import './Row.css'
const Row = (props) => {
    let counter = 1;
    // console.log("================");
    // console.log("Row Props config", props.config);
    // console.log("Row Props value", props.value.name);
    
    const tds = props.config.map(item => {
        // console.log(props.value[item.field]);
        counter += 1;
        return <td key={counter}>{props.value[item.field]}</td>
    });
    return (
        <tr>{tds}</tr>
    );
}
export default Row;
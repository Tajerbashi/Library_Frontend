
import './UL.css'
const UL = (props) => {
    return (
        <ul className='UL-Container'>
            {props.children}
        </ul>
    );
}
export default UL;
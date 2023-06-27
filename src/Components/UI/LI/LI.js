
import './LI.css'
const LI = (props) => {
    return (
        <li className='LI-Container'>
            <a href={props.link}>
                {props.children}
            </a>
        </li>
    );
}
export default LI;
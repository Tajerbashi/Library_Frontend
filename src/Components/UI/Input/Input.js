import './Input.css'
const Input = (props) => {
    let inputElement = null;

    switch (props.type) {
        case 'text':
            inputElement = <input
                className='input-item'
                value={props.value}
                {...props}
            />
            break;
        default:
            inputElement = <input
                className='input-item'
                value={props.value}
                {...props}
            />
    }
    return (
        <div className='input-Container'>
            {inputElement}
        </div>
    );
}
export default Input;
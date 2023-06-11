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
        case 'password':
            inputElement = <input
                type='password'
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
        <div>
            {inputElement}
        </div>
    );
}
export default Input;
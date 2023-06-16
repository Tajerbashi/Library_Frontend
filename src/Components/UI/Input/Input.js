import './Input.css'
const Input = (props) => {
    let inputElement = null;
    let styles = ['input-item'];
    if(!props.valid){
        styles.push('valid');
    }else{
    }
    switch (props.type) {
        case 'text':
            inputElement = <input
                className={styles.join(' ')}
                value={props.value}
                {...props}
            />
            break;
        case 'password':
            inputElement = <input
                type='password'
                className={styles.join(' ')}
                value={props.value}
                {...props}
            />
            break;
        default:
            inputElement = <input
                className={styles.join(' ')}
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
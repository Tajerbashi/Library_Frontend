import './BackDrop.css'
const BackDrop = (props) => {
    return (
        props.show ? <div onClick={props.showHandler} className='BackDrop-Container'></div> : null
    );
};
export default BackDrop;
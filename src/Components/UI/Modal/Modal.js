import './Modal.css'
import Wrapper from '../../HOC/wrapper';
import BackDrop from './BackDrop/BackDrop'
const Modal = (props) => {
    return (
        <Wrapper>
            <BackDrop
                showHandler={props.showHandler}
                show={props.show} />
            <div className='Modal-Container'
            
                style={
                    {
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }
                }
            >
            <button onClick={props.showHandler} className='Modal-Close'>X</button>

                {props.children}
            </div>
        </Wrapper>
    );
};
export default Modal;
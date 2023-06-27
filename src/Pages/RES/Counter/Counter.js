import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div className='container text-center'>
            <div className='bg-dark bg-gradient p-3 m-5 rounded-3 text-light'>CTR : {props.ctr}</div>
            <div className='d-flex flex-row justify-align-content-around'>
                <button className='w-25 btn btn-success mx-1' onClick={props.onIncrement}>INCREMENT</button>
                <button className='w-25 btn btn-danger mx-1' onClick={props.onDecrement}>DECREMENT</button>
                <button className='w-25 btn btn-primary mx-1' onClick={props.onAdd}>ADD</button>
                <button className='w-25 btn btn-warning mx-1' onClick={props.onSub}>SUB</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type:'INCREMENT'}),
        onDecrement: () => dispatch({type:'DECREMENT'}),
        onAdd: () => dispatch({type:'ADD',value: 2}),
        onSub: () => dispatch({type:'SUB', value: 2}),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
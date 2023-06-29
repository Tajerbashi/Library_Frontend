import { connect } from 'react-redux'

const Counter = (props) => {
    return (
        <div className='container text-center'>
            <div className='bg-dark bg-gradient p-3 m-5 rounded-3 text-light'>CTR : {props.ctr}</div>
            <div className='d-flex flex-row justify-content-center align-items-center flex-wrap'>
                <button className='w-25 btn btn-success mx-1 my-1' onClick={props.onIncrement}>INCREMENT</button>
                <button className='w-25 btn btn-danger mx-1 my-1' onClick={props.onDecrement}>DECREMENT</button>
                <button className='w-25 btn btn-primary mx-1 my-1' onClick={props.onAdd}>ADD</button>
                <button className='w-25 btn btn-warning mx-1 my-1' onClick={props.onSub}>SUB</button>
                <button className='w-25 btn btn-info mx-1 my-1' onClick={props.onPush}>Push</button>
                <button className='w-25 btn btn-light mx-1 my-1' onClick={props.onClear}>Clear</button>
            </div>
            <div className='bg-secondary bg-gradient p-3 m-5 rounded-3 text-light'>
                [{props.res.map(item => {
                    return ',' + item;
                })}]
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        res: state.result
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAdd: () => dispatch({ type: 'ADD', value: 2 }),
        onSub: () => dispatch({ type: 'SUB', value: 2 }),
        onPush: () => dispatch({ type: 'PUSH' }),
        onClear: () => dispatch({ type: 'CLEAR' }),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
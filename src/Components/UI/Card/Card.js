import './Card.css'

const Card = (props) => {
    return (
        <div className='Card-Container'>
            <div className='Card-Container-Child'>
                {props.children}
            </div>
        </div>
    );
}

export default Card;
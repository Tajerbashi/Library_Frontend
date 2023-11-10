import React from 'react';
import './TKCard.css'
const TKCard = (props) => {
    return (
        <div className='container-card'>
            {props.children}
        </div>
    );
}

export default TKCard;

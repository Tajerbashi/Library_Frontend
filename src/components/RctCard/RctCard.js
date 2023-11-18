/**
 * Rct Card
 */
import React from 'react';

// rct card heading
import { RctCardHeading } from './RctCardHeading'

const RctCard = (props) => {

    const { children, customClasses, heading, headingCustomClasses, colClasses }= props
    return (
        <div className={colClasses && colClasses}>
            <div className={`rct-block p-10 ${customClasses}`}>
                {heading &&
                    <RctCardHeading
                        title={heading}
                        customClasses={headingCustomClasses}
                    />
                }
                {children}
            </div>
        </div>
    );
    
}

export { RctCard };

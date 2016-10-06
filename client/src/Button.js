import React, {Component} from 'react';

const Button = ({label, action}) => {
    return (
        <div className='Button' onClick={action}>
            <p>{label}</p>
        </div>
    )
};

export default Button;
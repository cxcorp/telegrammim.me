import React, {Component} from 'react';

const Button = ({label, action}) => {
    return (
        <input className='Button' type='button' value={label} onClick={action}/>
    )
};

export default Button;
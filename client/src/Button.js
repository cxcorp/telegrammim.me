import React from 'react';
import './styles/Button.css';

const Button = ({label, action}) => {
    return (
        <div className='button' onClick={action}>
            <p>{label}</p>
        </div>
    )
};

export default Button;
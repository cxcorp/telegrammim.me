import React from 'react';
import './styles/Button.css';

const Button = ({label, color, action}) => {
    const style = {
        borderColor: color,
        borderWidth: '3px',
        borderStyle: 'none none solid none'
    };
    return (
        <div className='button button--animated' style={style} onClick={action}>
            <p>{label}</p>
        </div>
    )
};

export default Button;
import React from 'react';
import './styles/Button.css';

const Button = ({label, color, action}) => {
    const style = {
        borderColor: '#fcfcfc',
        borderWidth: '3px',
        borderRadius: '3px',
        borderStyle: 'solid',
        boxShadow: '0 0 5px 0px ' + color,
        textShadow: '1px 1px 3px ' + color
    };
    return (
        <div className='button button--animated' style={style} onClick={action}>
            <p>{label}</p>
        </div>
    )
};

export default Button;
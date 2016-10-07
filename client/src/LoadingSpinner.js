import React from 'react';
import classNames from 'classnames';
import './styles/LoadingSpinner.css';

const SpinnerCircle = ({color, classMod}) => {
    let className = 'loading-spinner__circle';
    if (classMod) {
        className = classNames(className, className + '--' + classMod);
    }

    const style = {
        borderColor: color,
        boxShadow: '0 0 5px 0 ' + color
    };
    return (
        <div className={className} style={style}></div>
    )
};

const LoadingSpinner = () => (
    <div className='loading-spinner'>
        <SpinnerCircle color='hsl(60, 100%, 60%)' classMod='3' />
        <SpinnerCircle color='hsl(300, 100%, 70%)' classMod='2' />
        <SpinnerCircle color='hsl(180, 100%, 60%)' classMod='1' />
        <SpinnerCircle color='#fff' classMod='topmost'/>
    </div>
);

export default LoadingSpinner;
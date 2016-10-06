import React from 'react';
import './styles/Banner.css'

const Banner = (props) => (
    <div className='banner banner--tilt_slow'>
        <h1>
            <span className='banner__punchline'>{props.header}</span> {props.plural ? 'odottavat' : 'odottaa'} sinua Telegrammissa!
        </h1>
    </div>
);

Banner.propTypes = {
    header: React.PropTypes.string.isRequired,
    plural: React.PropTypes.bool.isRequired
};

export default Banner;
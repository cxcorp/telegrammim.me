import React, {Component} from 'react';

const Banner = (props) => (
    <div className='Banner Slow-rotation'>
        <h1>
            <span className='Banner-text'>{props.header}</span> {props.plural ? 'odottavat' : 'odottaa'} sinua Telegrammissa!
        </h1>
    </div>
);

Banner.propTypes = {
    header: React.PropTypes.string.isRequired,
    plural: React.PropTypes.bool.isRequired
};

export default Banner;
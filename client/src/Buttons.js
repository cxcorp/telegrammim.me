import React, {Component} from 'react';
import Button from './Button.js';

class Buttons extends Component {
    render() {
        return (
            <div className='Buttons'>
                <Button label={this.props.labels.yes} />
                <Button label={this.props.labels.no} />
            </div>
        );
    }
}

export default Buttons;
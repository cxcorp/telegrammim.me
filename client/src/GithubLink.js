import React, {Component} from 'react';
import GithubMark from './resources/GitHub-Mark-32px.png';
import './styles/GithubLink.css';

class GithubLink extends Component {
    render() {
        return (
            <div className='github-link'>
                <a className='github-link__anchor' href={this.props.url}>
                    {this.props.children.toString()}
                    <img className='github-link__anchor__icon' src={GithubMark} alt='Github' />
                </a>
            </div>
        );
    }
}

export default GithubLink;
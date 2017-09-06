import React from 'react';

import NotSavedBtn from '../buttons/NotSaved.js';

export default class NotSaved extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            link : 'https://www.cnn.com'+this.props.article.link
        }
    }
    render() {
        return (
            <div className='card row grey lighten-2'>
                <div className='col s8'><p><a data-id={ this.props.article._id } value={this.props.article.saved}
                    href={this.state.link} target='_blank'> { this.props.article.title } </a></p></div>
                <div id='{{this._id}}' className='col s4'>
                    <NotSavedBtn articleId={this.props.article._id}/>

                </div>
            </div>
        )
    }
}
import React from 'react';

import AddNote from '../buttons/AddNote.js';
import DeleteArticle from '../buttons/DeleteArticle.js';
import SaveNote from '../notes/buttons/SaveNote.js'; 

export default class Saved extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            link : 'https://www.cnn.com'+this.props.article.link
        }
    }
    render() {
        return (
            <div className='card row teal lighten-5'>
                <div className='col s8'>
                    <p><a data-id={this.props.article._id} value={this.props.article.saved} href={this.state.link} target='_blank'> {this.props.article.title} </a></p>
                </div>
                <div id={this.props.article._id} className='col s4'>
                    {/*{{> articles / btnAddNote}} {{> articles / delete}}*/}
                    <AddNote articleId={this.props.article._id}/> <DeleteArticle articleId={this.props.article._id} />

                </div>
            </div>
        )
    }
}
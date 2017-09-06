import React from 'react';

//article stuff 
import AddNote from '../buttons/AddNote.js';
import DeleteArticle from '../buttons/DeleteArticle.js';

//note stuff
import SaveNote from '../notes/buttons/SaveNote.js';
import EditNote from '../notes/buttons/EditNote.js';
import DeleteNote from '../notes/buttons/DeleteNote.js';

export default class SavedNote extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            link : 'https://www.cnn.com'+this.props.article.link
        }
    }

    render() {
        return (
            <div>
            <ul className="collapsible popout" data-collapsible="accordion">
                <li className="card teal lighten-5 col s12">
                    <div className="collapsible-header teal lighten-5">
                        <div className='col s8'>
                            <p><a data-id={this.props.article._id} value={this.props.article.saved} href={this.state.link} target='_blank'> {this.props.article.title} </a></p>
                        </div>
                        <div id='{{this._id}}' className='col s4'>
                            {/*{{> articles / btnAddNote}} {{> articles / delete}}*/}
                            <AddNote articleId={this.props.article._id}/> <DeleteArticle articleId={this.props.article._id} />

                        </div>
                    </div>
                    <div className="collapsible-body">

                        <span>
                            <h5>
                                {/*{{ this.note.title }}*/} {/*{{> notes / btnDelete}}*/}
                                <DeleteNote noteId={this.props.article.note._id} />
                            </h5>
                            <p>{/*{{ this.note.body }}*/}</p>
                        </span>

                    </div>

                </li>
            </ul>
            </div>
        )
    }
}
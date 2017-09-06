import React from 'react';
//var Link = require('react-router').Link;
//article stuff
import NotSavedArticle from './children/NotSaved.js';
import Saved from './children/Saved.js';
import SavedNote from './children/SavedNote.js';

// import NotSavedBtn from './buttons/NotSaved.js';
// import AddArticle from './buttons/AddArticle.js';
// import DeleteArticle from './buttons/DeleteArticle.js';
// import EditArticle from './buttons/EditArticle.js';
// import AddNote from './buttons/AddNote.js';

// //note stuff
// import SaveNote from './notes/buttons/SaveNote.js';
// import EditNote from './notes/buttons/EditNote.js';
// import DeleteNote from './notes/buttons/DeleteNote.js';


export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    componentDidMount(){
        // console.log(this.props.article.title)
        // console.log(this.props.article.saved)
    }

    render(){
        var articleDiv;
        if (this.props.article.saved == false) {
            articleDiv = <NotSavedArticle article={this.props.article} />
        }
        else if (this.props.article.saved == true) {
            if (!this.props.article.note || this.props.article.note.body == null) {
                articleDiv = <Saved article={this.props.article} />
            }
            else if (this.props.article.note && this.props.article.note.body != null) {
               articleDiv = <SavedNote article={this.props.article} />
            }
        }

        return (
            <div> {articleDiv}</div>
        )
    }
}
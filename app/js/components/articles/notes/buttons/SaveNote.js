import React from 'react';

export default class SaveNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            action : "/articles/"+this.props.articleId
        }
    }
    render(){
        return (
            <div>
                <form className="col12 center" id="save-note" action={this.state.action} method="POST">
                    <input className="input-field center" id="titleinput" name="title" placeholder="Title" />
                    <textarea className="input-field materialize-textarea center" id="bodyinput" name="body" placeholder="Note"></textarea>
                    <button type="submit" className="btn btn-small waves-effect waves-light right" data-id={this.props.articleId}>Save</button>       
                 </form>
            </div>
        )
    }
}
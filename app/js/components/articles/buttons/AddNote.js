import React from 'react';

export default class AddNote extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
         <div>
            <button type='submit' className='view-note btn-floating btn-small waves-effect waves-light btn modal-trigger right' value={this.props.articleId} href='#notes-modal'>
                <i className='material-icons'>create</i>
            </button>
         </div>
        )
    }
}       
import React from 'react';

export default class DeleteNote extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            action : "/remove/"+this.props.noteId
        }
    }
    render(){
        return (
            <div>
                <form action={this.state.action} method="POST">
                    <button className='btn btn-small waves-effect waves-light right red'>Delete</button>
                </form>
            </div>
        )
    }
}
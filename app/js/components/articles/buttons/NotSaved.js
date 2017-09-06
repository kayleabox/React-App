import React from 'react';
import helpers from '../../utils/helpers.js';

export default class NotSaved extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            action: "/save/"+ this.props.articleId +"?_method=PUT",
        }
    }

    render(){
        return(
        <div>
            <form action={this.state.action} method="POST">
                <input type="hidden" name="saved" value="1"/>
                <button className='btn-floating btn-small waves-effect waves-light right'
                    value={this.props.value} data-id='{{this._id}}'><i className='material-icons'>add</i>
                </button>          
            </form>     
        </div>
        )
    }
}
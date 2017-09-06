import React from 'react';

export default class DeleteArticle extends React.Component{
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
                <button className='btn-floating btn-small waves-effect waves-light right red' 
                    value={this.props.vaule} data-id={this.props.articleId}>
                    <i className='material-icons'>remove</i>
                </button>

            </form>
         </div>
        )
    }
}
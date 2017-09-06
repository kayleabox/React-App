import React from 'react';
//var Link = require("react-router").Link;

import Nav from './Nav.js';
import Article from './articles/Article.js';
import helpers from './utils/helpers.js';
import SaveNote from './articles/notes/buttons/SaveNote.js'

export default class Main extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        articles: []
      }
    }
    
    // getInitialState() {
    // return { articles: [] };
    // }
 
    componentDidMount() {
      helpers.scrapeArticles().then(function (response) {
        console.log(response);
        helpers.getArticles().then(function (response) {
          console.log(response);
          this.setState({ articles: response.data})
          console.log(this.state.articles);
        }.bind(this));
      }.bind(this));
    }

    componentDidUpdate() {
      helpers.getArticles().then(function (response) {
        console.log(response);
      }.bind(this))
    }

    render() {
      return (
        <div>

          <Nav />

          <div className="container">
            <h2>Articles</h2>



            <div className="row">
              <article className="col s12">
                <ul>
                  {
                    this.state.articles.map((article, idx) => {
                      
                      return <li key={idx}><Article article={article} /></li>
                    })
                  }
                </ul>
              </article>
            </div>

            <div id="notes-modal" className="modal">
              <div className="modal-content">
                <div className="row card" id="add-note">
                  <h5><a id="article-title" className="col s12" href="#" ></a></h5>
                  <SaveNote articleId= {this.props.value}/>
                </div>
              </div>
              <div id="edit-notes" className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
                  </div>
              </div>
          

      )
    }
}
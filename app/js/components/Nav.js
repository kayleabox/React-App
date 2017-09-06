import React from 'react';


export default class Nav extends React.Component{

    render(){
        return(
            <div>
                <nav className="grey darken-1">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">News Scraper</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/articles">Articles</a></li>
                            <li><a href="/saved">Profile</a></li>
                        </ul>
                    </div>
                </nav>
          </div>
        )
    }
}
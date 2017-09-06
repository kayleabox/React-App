import React from 'react';

import router from 'react-router';

const Route = router.Route;
const Router = router.Router;
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;


import Main from '../components/Main';
import Article from '../components/articles/Article';
import AddArticle from '../components/articles/buttons/AddArticle';
import DeleteArticle from '../components/articles/buttons/DeleteArticle';
import EditArticle from '../components/articles/buttons/EditArticle';
import NotSave from '../components/articles/buttons/NotSaved';

import Note from '../components/articles/notes/Note';
import AddNote from '../components/articles/notes/buttons/AddNote';
import EditNote from '../components/articles/notes/buttons/EditNote';
import DeleteNote from '../components/articles/notes/buttons/DeleteNote';

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={App}>

      {/* If user selects Child1 then show the appropriate component*/}
      <Route path="Article" component={Article} >

        <Route path="AddArticle" component={AddArticle} />
        <Route path="DeleteArticle" component={DeleteArticle} />
        <Route path="EditArticle" component={EditArticle} />
        <Route path="NotSaved" component={NotSaved} />

        <Route path="Note" component={Note} />



        {/*<IndexRoute component={GrandChild1} />*/}

      </Route>
      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Article} />

    </Route>
  </Router>
);
// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  scrapeArticles: function() {

    console.log("scraping"); 
    return axios.get("/scrape");
  },

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/all");
  },

  getSaved: function() {
    return axios.get("/saved");
  },

  getOneArticle: function(id) {
    return axios.get("/articles/"+id);
  },

  // This function posts new searches to our database.
  postNote: function(id) {
    return axios.post("/articles/"+id, { title: title, body: body,  });
  },

  updateArticle: function(id, saved){
      return axios.put("/save/"+id, {saved: saved});
  },

  deleteNote: function(id) {
    return axios.post("/remove/"+id);
  },
};

// We export the API helper
module.exports = helper;

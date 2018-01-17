var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(articles) {
        // then insert articles into the db
        return db.jcpenny.create(articles);
      })
      .then(function(dbHeadline){

      })
      .catch(function(err){
          res.json({
              message:"latesttrend"
          });
      })
    }};
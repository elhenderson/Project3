const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
var db = require('./client/models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
      console.log(
          '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
          PORT,
          PORT
      );
  });
});

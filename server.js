const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
var db = require('./models');
const bodyParser = require('body-parser');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
app.use('/api', apiRoutes);
// app.use('/html', htmlRoutes);

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

const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const passport = require("passport");
const users = require("./routes/api/users");
const path = require('path');

const mongoose = require("mongoose");
const routes = require("./routes");

const http = require('http').createServer(app);
const io = require('socket.io')(http);

let PORT;
if (process.env.NODE_ENV === "production") {
  PORT = process.env.PORT;
} else {
  PORT = 5000;
}

// const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Add routes, both API and view
// app.use(routes);

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.get('/', function (req, res) {
  res.send('hello world')
});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Start the API server
server = http.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const io = socketIo(server);

io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  });
});
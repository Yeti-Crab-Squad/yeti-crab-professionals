const path = require('path');
const express = require('express');
const socketio = require('socket.io');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const usersRouter = require("./routers/users");
const mainRouter = require('./routers/main.js')
const formatMessage = require('../utils/messages');

// SETTING UP SERVER
const app = express();
const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
const io = socketio(server);

// ESTABLISH CONNECTION TO DATABASE
const MONGO_URI = 'mongodb+srv://woof:codesmith123@woof.qaamj.mongodb.net/woof?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO MONGO DB'))
  .catch((err) => console.log(err));

// SET UP
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, '../client/')));


app.use("/api", usersRouter);
app.use("/main", mainRouter);

// DIRECT ALL INCOMING TRAFFIC TO HOMEPAGE
app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const botName = 'WoofBot';

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error: Unknown middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };

  console.log('ERROR LOG => ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Run when a client connects
io.on('connection', socket => {
  console.log("A USER CONNECTED!");
  // socket.on('joinRoom', ({ username, room }) => {
  // Welcome current user
  socket.emit('message', formatMessage(botName, 'Welcome to testchat!'))

  // Broadcast when a user connects
  socket.broadcast.emit('message', formatMessage(botName, 'A user has joined the chat!'));
  // });

  // Listen for chat message
  socket.on('userMessage', ({ username, text}) => {
    io.emit('friendMessage', formatMessage(username, text));
  })

  socket.on('friendMessage', ({ username, text }) => {
    io.emit('userMessage', formatMessage(username, text))
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', formatMessage(botName, 'A user has left the chat!'));
  });
});
// STARTUP LOGS
// console.log(
//   'Remember to check your .env file if you cannot connect to the database'
// );
// console.log(`Server is listening at http://localhost:${PORT}`);
// console.log(`Client is live at http://localhost:8080`);

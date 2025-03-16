// create socket io client for node.js

const io = require('socket.io-client');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('connected');
  socket.emit('events', 'Hello from client');
})

socket.on('events', (data) => {
  console.log(data);
})

socket.on('disconnect', () => {
  console.log('disconnected');
})

socket.on('error', (error) => {
  console.log(error);
})





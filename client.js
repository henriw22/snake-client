const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });
  
  conn.write('Name: HnW');
  // conn.write('Move: up');
  // setInterval(() => {conn.write('Move: up')}, 2000); 
  // setTimeout(() => {conn.write('Move: left');}, 2000);
  // setTimeout(() => {conn.write('Move: up');}, 4000);

  conn.on('data', (data) => {
    console.log('server said:', data);
  });
  return conn;
};

  module.exports = connect;
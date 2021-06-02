const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("connected");
  });

  conn.on('data', (data) => {
    console.log('server said:', data);
  });
  return conn;
};


console.log("Connecting ...");
connect();
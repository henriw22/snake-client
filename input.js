let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) => {
    // your code here
    if (key === 'w') {
      conn.write('Move: up');
    } else if (key === 's') {
      conn.write('Move: down');
    } else if (key === 'a') {
      conn.write('Move: left');
    } else if (key === 'd') {
      conn.write('Move: right');
    } else if (key === '\u0003') {
      process.exit();
    }
    // switch (key) {
    //   case 'w': conn.write('Move: up'); break;
    //   case 's': conn.write('Move: down'); break;
    //   case 'a': conn.write('Move: left'); break;
    //   case 'd': conn.write('Move: right'); break;
    //   case '\u0003':process.exit();
    // }
  };

  const specialMessage = (key) => {
    if (key === 'g') {
      conn.write('Say: Go Go Go!');
    } else if (key === 'h') {
      conn.write('Say: Hello!');
    } else if (key === 'j') {
      conn.write('Say: Juked!');
    }
  };

  stdin.on("data", specialMessage);

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;
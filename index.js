server = require('./server');
let PORT = process.env.PORT || 3030;

server.listen(PORT, () => console.log(`Server listening ${PORT}`));
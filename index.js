server = require('./server');
let PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server listening ${PORT}`));
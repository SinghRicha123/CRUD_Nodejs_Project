const app = require('./app.js');
const PORT = 5000;


app.listen(PORT , (req , res) => {
    console.log(`server is listening at http://localhost:${PORT}`)
})
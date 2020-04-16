const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
var path = require('path')
var serveStatic = require('serve-static')
//middleware

app.use(express.json()); //req.body
app.use(cors());
app.use(express.static("public"));
app.use(serveStatic(path.join(__dirname, 'dist')))
//routes

//register and login routes
app.use( '/auth' , require( './routes/jwtAuth' ) );


//dashboard route

app.use("/dashboard", require("./routes/dashboard"));
//app.use("/dashboard", require("./routes/dashboard"));

//settings
app.use("/settings", require("./routes/settings"));
//patient routes
app.use("/transaction", require("./routes/transaction"));


app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () =>{
    console.log('server started at port : ' + port);
});
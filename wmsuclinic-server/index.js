const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require('path');
var serveStatic = require('serve-static');
//middleware

app.use(express.json()); //req.body
app.use(cors());


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


//server static folder if in prod.
if(process.env.NODE_ENV === 'production') {
//set static folder
 app.use(express.static('wmsuclinic-client/build'));
 
 app.get('*', (req ,res) => {
    res.sendFile(path.resolve(_dirname, 'wmsuclinic-client', 'build', 'index.html'));
 })
}

app.listen(port, () =>{
    console.log('server started at port : ' + port);
});





//
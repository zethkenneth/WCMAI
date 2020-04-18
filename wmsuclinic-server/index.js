const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const path = require('path');
const dev = app.get('env') !== 'production';
const morgan = require('morgan');
const compression = require('compression');
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
if(!dev) {
//set static folder
 app.disable('x-powered-by');
 app.use(compression());
 app.use(morgan('common'));

 app.use(express.static(path.resolve(__dirname, '../wmsuclinic-client','build')));
  app.get('*', (req ,res) => {
     res.sendFile(path.resolve(__dirname, '../wmsuclinic-client', 'build', 'index.html'));
  })
 }
if(dev) {
    app.use(morgan('dev'));
}


// app.get("/", (req, res) => {
//     res.send("HELLO SA INYO BACKEND SERVER ITO")
// });
app.listen(port, err =>{
    if(err) throw err;
    console.log('server started at port : ' + port);
});





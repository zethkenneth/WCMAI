const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    database: "wmsuclinic"


    //databse on heroku
    // user: "kgkwnyxdoyxyjg",
    // password: "f6ca20c627ced5ef036d9e287a442f0744b6c82323b407a7e72620023324c810",
    // host: "ec2-23-20-129-146.compute-1.amazonaws.com",
    // database: "d6400mnf6uapl9"



});

module.exports = pool;
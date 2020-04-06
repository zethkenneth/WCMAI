const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "h41dlrPOSTGRESQL",
    host: "localhost",
    port: 5432,
    database: "wmsuclinic"
});

module.exports = pool;
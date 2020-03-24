const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");
//registering
router.post("/register", validInfo , async (req,res)=> {
    try {
        //1. destructive req.body
            const { username, password, usertype } = req.body;
        //check if user exist(throw eror)
            const user = await pool.query("Select * from account WHERE user_name =$1", [
                username
            ]);
            if(user.rows.length !== 0 ){
                return res.status(401).send("User Already Exist");
            }
        //bcrypt  the user password
         const  saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(password, salt);
        //enter the new user in db 
            const newUser = await pool.query("INSERT INTO account (user_name,user_password,user_type) VALUES ($1,$2,$3) RETURNING *",
            [username, bcryptPassword, usertype
        
        ]);
      
        //generate on  jwt token

        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({token});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
        
    }
});
//login route
router.post("/login", validInfo , async (req,res) => { 
    try {
        //destructive the req.body

        const {username, password } = req.body;
        //check if user doesn't exist (if not then we throw error)
        const user = await pool.query("Select * from account WHERE user_name =$1", [
            username
        ]);

        if(user.rows.length === 0){
            return res.status(401).json("User Does Not Exist!");
        }
        //check if incoming password is the same with db
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        
        if(!validPassword){
            return res.status(401).json("Username or Password Incorrect");
        }
        //give them the jwt token
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token});
        


    } catch (err) {
        console.log(err.message);
        res.status(5000).send("Server Error");
    } 
});

router.get("/is-verify", authorization , async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
});
module.exports = router;
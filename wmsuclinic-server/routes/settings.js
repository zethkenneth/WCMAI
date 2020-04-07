const router = require("express").Router();
const pool = require("../db");



//routes

//get all data
router.get("/unit", async(req,res) =>{
        try {
            const allUnit = await pool.query("SELECT * from unit");
            res.json(allUnit.rows);
        } catch (err) {
            console.error(err.message);
        }

    
});

//get a data
router.get("/unit/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const Unit = await pool.query("SELECT * from unit WHERE unit_id = $1", [
            id
        
        ]);
        res.json(Unit.rows[0]);
    } catch (err) {
        console.error(err.message);
    }


});
//create data

    router.post("/addUnit", async (req,res) =>{
        try {
            const {unit_type} = req.body;
            const unit = await pool.query("INSERT INTO unit (unit_type) VALUES ($1) RETURNING * ", [unit_type]
            
            );
            res.json(unit.rows[0]);

        } catch (err) {
            console.error(err.message);
        }
    });
//update data
router.put("/unit/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const {unit_type} = req.body;
        const Unit = await pool.query("UPDATE  unit SET unit_type = $1 WHERE unit_id = $2", [
            unit_type,id
        
        ]);
        res.json("Unit Updated!");
    } catch (err) {
        console.error(err.message);
    }


});
//delete

router.delete("/unit/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const deleteUnit = await pool.query("DELETE FROM unit WHERE unit_id = $1", [
            id
        
        ]);
        res.json("Unit DELETED!");
        
    } catch (err) {
        console.error(err.message);
    }


});




module.exports = router;
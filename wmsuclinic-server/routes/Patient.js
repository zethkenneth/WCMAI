const router = require("express").Router();
const pool = require("../db");

/////////////////////////////////////
//routes for patient
//get all data patient
router.get("/patient", async(req,res) =>{
    try {
        const allPatient = await pool.query("SELECT * from patient");
        res.json(allPatient.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data patient
router.get("/patient/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const category = await pool.query("SELECT * from patient WHERE patient_no = $1", [
        id
    
    ]);
    res.json(category.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data batch

router.post("/addPatient", async (req,res) =>{
    try {
        const {patient_lname , patient_fname , patient_mname , patient_ename} = req.body;
        const patient = await pool.query("INSERT INTO patient (patient_lname , patient_fname , patient_mname , patient_ename) VALUES ($1,$2,$3,$4) RETURNING * ",[
            patient_lname , patient_fname , patient_mname , patient_ename]);
      
        res.json(patient.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
//update data patient
router.put("/patient/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {patient_lname , patient_fname , patient_mname , patient_ename} = req.body;
    const patient = await pool.query("UPDATE  patient SET patient_lname = $1 , patient_fname = $2 , patient_mname  = $3 , patient_ename = $4 WHERE patient_no = $5", [
        patient_lname , patient_fname , patient_mname , patient_ename,
        id
    
    ]);
    res.json("patient Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete patient

router.delete("/patient/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deletePatient = await pool.query("DELETE FROM patient WHERE patient_no = $1", [
        id
    
    ]);
    res.json("patient DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});





module.exports = router; 
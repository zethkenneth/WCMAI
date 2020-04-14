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
//create data patient

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

/////////////////////////////////
//routes for employee

router.get("/employee", async(req,res) =>{
    try {
        const allEmployee = await pool.query("SELECT * from employee");
        res.json(allEmployee.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data employee
router.get("/employee/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const employee = await pool.query("SELECT * from employee WHERE employee_id = $1", [
        id
    
    ]);
    res.json(employee.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data employee

router.post("/addEmployee", async (req,res) =>{
    try {
        const {employee_position , employee_type , unit_unit_id , patient_patient_no} = req.body;
        const employee = await pool.query("INSERT INTO employee (employee_position , employee_type , unit_unit_id , patient_patient_no) VALUES ($1,$2,$3,$4) RETURNING * ",[
            employee_position , employee_type , unit_unit_id , patient_patient_no]);
      
        res.json(employee.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
//update data employee
router.put("/employee/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {employee_position , employee_type , unit_unit_id , patient_patient_no} = req.body;
    const employee = await pool.query("UPDATE  patient SET employee_position = $1 , employee_type = $2 , unit_unit_id  = $3 , patient_patient_no = $4 WHERE employee_id = $5", [
        employee_position , employee_type , unit_unit_id , patient_patient_no,
        id
    
    ]);
    res.json("employee Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete patient

router.delete("/employee/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteEmployee = await pool.query("DELETE FROM employee WHERE employee_id = $1", [
        id
    
    ]);
    res.json("employee DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});



//routes for transaction
//get all data transaction
router.get("/transaction", async(req,res) =>{
    try {
        const allTransaction = await pool.query("SELECT * from transaction");
        res.json(allTransaction.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data transaction
router.get("/transaction/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const transaction = await pool.query("SELECT * from transaction WHERE transaction_id = $1", [
        id
    
    ]);
    res.json(transaction.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data transaction

router.post("/addTransaction", async (req,res) =>{
    try {
        const {created_at , quantity_of_meds , illness , nursing_care , patient_patient_no , account_account_id} = req.body;
        const transaction = await pool.query("INSERT INTO transaction (created_at , quantity_of_meds , illness , nursing_care , patient_patient_no , account_account_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",[
            created_at , quantity_of_meds , illness , nursing_care , patient_patient_no , account_account_id]);
      
        res.json(transaction.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
//update data transaction
router.put("/transaction/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {created_at , quantity_of_meds , illness , nursing_care , patient_patient_no , account_account_id} = req.body;
    const transaction = await pool.query("UPDATE  transaction SET created_at = $1 , quantity_of_meds = $2 , illness  = $3 , nursing_care = $4 , patient_patient_no = $5 , account_account_id = $6 WHERE transaction_id = $7", [
        created_at , quantity_of_meds , illness , nursing_care , patient_patient_no , account_account_id,
        id
    
    ]);
    res.json("transaction Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete transaction

router.delete("/transaction/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteTransaction = await pool.query("DELETE FROM transaction WHERE transaction_id = $1", [
        id
    
    ]);
    res.json("transaction DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});





/////////////////////////////////////
//routes for student
//get all data student
router.get("/student", async(req,res) =>{
    try {
        const allStudent = await pool.query("SELECT * from student");
        res.json(allStudent.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data student
router.get("/student/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const student = await pool.query("SELECT * from student WHERE student_id = $1", [
        id
    
    ]);
    res.json(student.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data student

router.post("/addStudent", async (req,res) =>{
    try {
        const {department_department_no , course_course_id , patient_patient_no} = req.body;
        const student = await pool.query("INSERT INTO student (department_department_no , course_course_id , patient_patient_no) VALUES ($1,$2,$3) RETURNING * ",[
            department_department_no , course_course_id , patient_patient_no]);
      
        res.json(student.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
//update data student
router.put("/student/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {department_department_no , course_course_id , patient_patient_no} = req.body;
    const student = await pool.query("UPDATE  student SET department_department_no = $1 , course_course_id = $2 , patient_patient_no  = $3 ,  WHERE student_id = $4", [
        department_department_no , course_course_id , patient_patient_no,
        id
    
    ]);
    res.json("student Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete student

router.delete("/student/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteStudent = await pool.query("DELETE FROM student WHERE student_id = $1", [
        id
    
    ]);
    res.json("student DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});






module.exports = router; 
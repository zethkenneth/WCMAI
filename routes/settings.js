const router = require("express").Router();
const pool = require("../db");

//routes to para sa unit, category, department, medicine,course and batch

//routes

//get all data unit
router.get("/unit", async(req,res) =>{
        try {
            const allUnit = await pool.query("SELECT * from unit");
            res.json(allUnit.rows);
        } catch (err) {
            console.error(err.message);
        }

    
});
//get a data unit
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
//create data unit

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
//update data unit
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
//delete unit

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





//////////////////////////////////////////
//routes for department
//get all data department
router.get("/department", async(req,res) =>{
    try {
        const allDepartment = await pool.query("SELECT * from department");
        res.json(allDepartment.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data department
router.get("/department/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const Department = await pool.query("SELECT * from department WHERE department_no = $1", [
            id
        
        ]);
        res.json(Department.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});
//create data department

router.post("/addDepartment", async (req,res) =>{
    try {
        const { department_name} = req.body;
        const unit = await pool.query("INSERT INTO department (department_name) VALUES ($1) RETURNING * ",[
            department_name]);
      
        res.json(unit.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});
//update data department
router.put("/department/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const { department_name} = req.body;
    const department = await pool.query("UPDATE  department SET department_name = $1 WHERE department_no = $2", [
        department_name, id
    
    ]);
    res.json("Department Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete department

router.delete("/department/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteDepartment = await pool.query("DELETE FROM department WHERE department_no = $1", [
        id
    
    ]);
    res.json("Department DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});


//////////////////////////////////////////
//get all data course
router.get("/course", async(req,res) =>{
    try {
        const allcourse = await pool.query("SELECT * from course");
        res.json(allcourse.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data course
router.get("/course/:id", async(req,res) =>{
    try {
        const {id} = req.params;
        const Department = await pool.query("SELECT * from course WHERE course_id = $1", [
            id
        
        ]);
        res.json(Department.rows[0]);
    } catch (err) {
        console.error(err.message);
    }

});
//create data course

router.post("/addCourse", async (req,res) =>{
    try {
        const { course_name, department_department_no} = req.body;
        const course = await pool.query("INSERT INTO course (course_name, department_department_no) VALUES ($1,$2) RETURNING * ",[
            course_name,department_department_no]);
      
        res.json(course.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});
//update data course
router.put("/course/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const { course_name,department_department_no} = req.body;
    const department = await pool.query("UPDATE  course SET course_name = $1 ,  department_department_no = $2  WHERE course_id = $3", [
        course_name,department_department_no, id
    
    ]);
    res.json("course Updated!");
} catch (err) {
    console.error(err.message); 
}


});
//delete course

router.delete("/course/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deletecourse = await pool.query("DELETE FROM course WHERE course_id = $1", [
        id
    
    ]);
    res.json("course DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});

/////////////////////////////////////
//routes for category
//get all data category
router.get("/category", async(req,res) =>{
    try {
        const allcategory = await pool.query("SELECT * from category");
        res.json(allcategory.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data category
router.get("/category/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const category = await pool.query("SELECT * from category WHERE category_id = $1", [
        id
    
    ]);
    res.json(category.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data category

router.post("/addCategory", async (req,res) =>{
    try {
        const {category_name, category_area, category_dosage} = req.body;
        const category = await pool.query("INSERT INTO category (category_name, category_area, category_dosage) VALUES ($1,$2,$3) RETURNING * ",[
            category_name, category_area, category_dosage]);
      
        res.json(category.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});
//update data category
router.put("/category/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {category_name , category_area , category_dosage} = req.body;
    const category = await pool.query("UPDATE  category SET category_name = $1 , category_area = $2 , category_dosage  = $3 WHERE category_id = $4", [
        category_name, 
        category_area, 
        category_dosage,
        id
    
    ]);
    res.json("category Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete category

router.delete("/category/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteCategory = await pool.query("DELETE FROM category WHERE category_id = $1", [
        id
    
    ]);
    res.json("category DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});

/////////////////////////////////////
//routes for batch
//get all data batch
router.get("/batch", async(req,res) =>{
    try {
        const allbatch = await pool.query("SELECT * from batch");
        res.json(allbatch.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data batch
router.get("/batch/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const category = await pool.query("SELECT * from batch WHERE batch_id = $1", [
        id
    
    ]);
    res.json(category.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data batch

router.post("/addBatch", async (req,res) =>{
    try {
        const {expiration_date , arrived_date , med_qty , medicine_medicine_id} = req.body;
        const batch = await pool.query("INSERT INTO batch (expiration_date , arrived_date , med_qty , medicine_medicine_id) VALUES ($1,$2,$3,$4) RETURNING * ",[
            expiration_date , arrived_date , med_qty , medicine_medicine_id]);
      
        res.json(batch.rows[0]);
        
    } catch (err) {
        console.error(err.message);
    }
});
//update data batch
router.put("/batch/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {expiration_date , arrived_date , med_qty , medicine_medicine_id} = req.body;
    const category = await pool.query("UPDATE  batch SET expiration_date = $1 , arrived_date = $2 , med_qty  = $3 , medicine_medicine_id = $4 WHERE batch_id = $5", [
        expiration_date , arrived_date , med_qty , medicine_medicine_id,
        id
    
    ]);
    res.json("batch Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete batch

router.delete("/batch/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteBatch = await pool.query("DELETE FROM batch WHERE batch_id = $1", [
        id
    
    ]);
    res.json("batch_id DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});





/////////////////////////////////////
//routes for medicine
//get all data medicine
router.get("/medicine", async(req,res) =>{
    try {
        const allMedicine = await pool.query("SELECT * from medicine");
        res.json(allMedicine.rows);
    } catch (err) {
        console.error(err.message);
    }


});
//get a data medicine
router.get("/medicine/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const medicine = await pool.query("SELECT * from medicine WHERE medicine_id = $1", [
        id
    
    ]);
    res.json(medicine.rows[0]);
} catch (err) {
    console.error(err.message);
}


});
//create data medicine

router.post("/addMedicine", async (req,res) =>{
    try {
        const {medicine_name , medicine__dosage , category_category_id , batch_batch_id} = req.body;
        const category = await pool.query("INSERT INTO medicine medicine_name , medicine__dosage , category_category_id , batch_batch_id) VALUES ($1,$2,$3,$4) RETURNING * ",[
            medicine_name , medicine__dosage , category_category_id , batch_batch_id]);
      
        res.json(category.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});
//update data medicine
router.put("/medicine/:id", async(req,res) =>{
try {
    const {id} = req.params;
    const {medicine_name , medicine__dosage , category_category_id , batch_batch_id} = req.body;
    const medicine = await pool.query("UPDATE  medicine SET medicine_name = $1 , medicine__dosage = $2 , category_category_id  = $3 batch_batch_id = $4 WHERE category_id = $5", [
        medicine_name , medicine__dosage , category_category_id , batch_batch_id,
        id
    
    ]);
    res.json("medicine Updated!");
} catch (err) {
    console.error(err.message);
}


});
//delete medicine

router.delete("/medicine/:id", async(req,res) => {
try {
    const {id} = req.params;
    const deleteMedicine = await pool.query("DELETE FROM medicine WHERE medicine_id = $1", [
        id
    
    ]);
    res.json("medicine DELETED!");
    
} catch (err) {
    console.error(err.message);
}
});

module.exports = router; 
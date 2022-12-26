const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

//Add a new suggestion and complaint to the database
router.post("/add", feedbackController.createSugOrComp);

//Get all suggestions and complaints from the database
router.get("/all", feedbackController.getAllSugAndComp);

//Get all departments data from DataBase
router.get("/departments", feedbackController.getAllDepartments);

//Get all sections in a specific department
router.get(
  "/sections/:department_id",
  feedbackController.getSectionsOfDepartment
);

module.exports = router;

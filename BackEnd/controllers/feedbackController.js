const departmentsModel = require("../models/departmentsModel");
const sugAndCompModel = require("../models/sugAndCompModel");
const sectionsModel = require("../models/sectionsModel");
const validator = require("validator");

//Controller to: Read departments from database and send it to the user
const getAllDepartments = async (req, res) => {
  try {
    const departments = await departmentsModel.getAll();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Controller to: Read all Suggestions and Complaints from database and send it to the user
const getAllSugAndComp = async (req, res) => {
  try {
    const sugAndComp = await sugAndCompModel.getAll();
    res.json(sugAndComp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Controller to: Receive department id from a user and send all sections in that department
const getSectionsOfDepartment = async (req, res) => {
  try {
    const sections = await sectionsModel.getSectionsById(
      req.params.department_id
    );
    res.json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//Controller to: Receive new Suggestions from user and save it in the database
const createSugOrComp = async (req, res) => {
  try {
    const { email, departments, sections, suggestions_complaints } = req.body;
    //Check for correct data
    const completeInput =
      Boolean(email) &
      Boolean(departments) &
      Boolean(sections) &
      Boolean(suggestions_complaints);
    if (!completeInput) {
      throw new Error("Incomplete Data");
    }
    //Check for valid email
    if (!validator.isEmail(req.body.email)) {
      throw new Error("Invalid Email");
    }
    const createOne = await sugAndCompModel.createOne(req.body);
    res.json(createOne);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllDepartments,
  getAllSugAndComp,
  getSectionsOfDepartment,
  createSugOrComp,
};

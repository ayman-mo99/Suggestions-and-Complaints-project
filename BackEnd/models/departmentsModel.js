// Object represents Departments table in the database
// All interactions with Departments will be as methods in that object
const Departments = {
  //Read all departments we have in the table
  getAll: async () => {
    let pool = await global.dbPool;
    const [results, fields] = await pool.query("SELECT * FROM departments");
    return results;
  },
};

module.exports = Departments;

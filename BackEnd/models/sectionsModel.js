// Object represents sections table in the database
// All interactions with sections table will be as methods in that object
const sections = {
  //Read all sections in a specific department using department id
  getSectionsById: async (id) => {
    let pool = await global.dbPool;
    // use Prepared Statements to avoid  SQL injection
    const [results, fields] = await pool.execute(
      "SELECT section_name FROM sections where department_id=? ",
      [id]
    );
    return results;
  },
};

module.exports = sections;

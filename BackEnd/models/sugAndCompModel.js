// Object represents sections table in the database
// All interactions with sections table will be as methods in that object
const sugAndComp = {
  //Read all Suggestions and Complaints from the database
  getAll: async () => {
    let pool = await global.dbPool;
    const [results, fields] = await pool.query("SELECT * FROM `sugandcomp`");
    return results;
  },
  //Create new Suggestions or Complaints
  createOne: async (item) => {
    let pool = await global.dbPool;
    const { email, departments, sections, suggestions_complaints } = item;
    //Using Prepared Statements help us prevent SQL injection attacks
    let sqlInsert =
      " INSERT INTO `sugAndComp` ( email, departments, sections, suggestions_complaints)" +
      `VALUES ( ?, ?, ?, ?); `;
    const [results, fields] = await pool.execute(sqlInsert, [
      email,
      departments,
      sections,
      suggestions_complaints,
    ]);
    return results;
  },
};

module.exports = sugAndComp;

//This function is to display all data from suggestions and complaints table in the database
function List({ list }) {
  return (
    <table className="fullList">
      <tbody>
        <tr className="itemInList" style={{ hight: "100px" }}>
          <td style={{ width: "120px", height: "50px", color: "#575554" }}>
            Email
          </td>
          <td style={{ width: "100px", color: "#575554" }}> Department</td>
          <td style={{ width: "50px", color: "#575554" }}> Section</td>
          <td style={{ color: "#575554" }}> Suggestions Complaints</td>
        </tr>

        {list.map((one) => (
          <tr className="itemInList" key={one.row_id}>
            <td style={{ width: "120px" }}>{one.email}</td>
            <td style={{ width: "100px" }}> {one.departments}</td>
            <td style={{ width: "50px" }}> {one.sections}</td>
            <td> {one.suggestions_complaints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;

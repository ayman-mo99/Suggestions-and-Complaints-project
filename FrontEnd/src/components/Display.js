import { useState } from "react";
import List from "./List";
import { useEffect } from "react";
function Display() {
  //Data of the Component
  const [list, setList] = useState([]); // the data from the database
  const [loading, setLoading] = useState(true); // Loading message
  const [error, setErorr] = useState(null); // Error message
  //Read all data from suggestions and complaints table in the database
  useEffect(() => {
    fetch(`http://localhost:5000/feedback/all`)
      .then((response) => {
        if (!response.ok) {
          throw Error("Canot fetch the data");
        }
        return response.json();
      })
      .then((actualData) => {
        setList(actualData);
        setLoading(false);
        setErorr(null);
      })
      .catch((err) => {
        setErorr(err.message);
        setLoading(false);
        console.log(err.message);
      });
  }, []);

  return (
    <div className="display">
      <div className="topPart">
        <div className="textpart">
          <p style={{ marginTop: 0, marginBottom: 0 }}>
            Suggestions & Complaints
          </p>
          <p style={{ marginTop: 0 }}> Users Feedback Table</p>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      {error && <p style={{ margin: 20 }}>{error} </p>}
      {loading && <p style={{ margin: 20 }}>Loading... </p>}
      {list && <List list={list} />}
    </div>
  );
}

export default Display;

import { useState, useEffect } from "react";

function Create() {
  //Data of the Component
  const [departments, setDepartments] = useState([]);
  const [sections, setSections] = useState([]);
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selecteSections, setSelecteSections] = useState("");
  //Read all departments we have from the Database
  useEffect(() => {
    fetch(`http://localhost:5000/feedback/departments`)
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setDepartments(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  //when we choose the department should appear the sections of the departments
  const getSections = (e) => {
    //Find the department name using the id of that department
    departments.forEach((item) => {
      if (item.department_id == e) {
        setSelectedDepartment(item.department_name);
      }
    });
    //Read all sections belongs to a department
    fetch(`http://localhost:5000/feedback/sections/` + e)
      .then((response) => {
        return response.json();
      })
      .then((actualData) => {
        setSections(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //when the user clicks submit all data will be saved in the database
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: username,
      departments: selectedDepartment,
      sections: selecteSections,
      suggestions_complaints: body,
    };
    // We have to handel missing or incorrect Data
    const valid = checkData(data);
    if (!valid) {
      return;
    }
    // add ( @elsewedy.com ) to save that data correctly
    data.email = data.email + "@elsewedy.com";
    fetch("http://localhost:5000/feedback/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        alert("Your Suggestions & Complaints is sent!");
        console.log("Your Suggestions & Complaints is sent!");
      })
      .catch((err) => {
        alert(" Cannot sent! ");
        console.log(err.message);
      });
  };

  const checkData = (data) => {
    const { email, departments, sections, suggestions_complaints } = data;
    const completeInput =
      Boolean(email) &
      Boolean(departments) &
      Boolean(sections) &
      Boolean(suggestions_complaints);
    if (!completeInput) {
      alert(" Missed data! ");
      console.log(" Missed data! ");
      return false;
    }
    if (email.includes(" ") || email.includes("@")) {
      alert(" Invalid Username Mail! ");
      console.log(" Invalid Username Mail! ");
      return false;
    }
    return true;
  };
  return (
    <div className="create">
      <h1>Suggestions & Complaints</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="emaildiv">
          <input
            placeholder="Username Mail"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label style={{ color: "black", width: "20%" }}>@elsewedy.com</label>
        </div>

        <select
          defaultValue="-1"
          style={{ marginRight: "5px", width: "50%" }}
          onChange={(e) => getSections(e.target.value)}
        >
          <option value="-1" disabled>
            Choose Departments
          </option>
          {departments.map((one) => (
            <option key={one.department_id} value={one.department_id}>
              {one.department_name}
            </option>
          ))}
        </select>

        <select
          defaultValue="-1"
          style={{ width: "49%" }}
          onChange={(e) => {
            setSelecteSections(e.target.value);
          }}
        >
          <option value="-1" disabled>
            Choose Sections
          </option>
          {sections.map((one) => (
            <option key={one.department_id} value={one.section_name}>
              {one.section_name}
            </option>
          ))}
        </select>

        <textarea
          style={{ resize: "none" }}
          className="inputsuggestions"
          placeholder="Suggestions & Complaints"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Create;

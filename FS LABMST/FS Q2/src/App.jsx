import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submissions, setSubmissions] = useState([]); // array of all submitted forms

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissions([...submissions, formData]); // add current form data to submissions
    setFormData({ name: "", email: "", course: "" }); // clear form
  };

  return (
    <div className="App">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course: </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Course --</option>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Display all submissions below the form */}
      {submissions.length > 0 && (
        <div className="submitted-data">
          <h3>All Submissions:</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;

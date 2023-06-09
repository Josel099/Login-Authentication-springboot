import { useState } from "react";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    // Perform validation
    if (!employeename || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    
    try {
      await axios.post("http://localhost:8089/employee/save", {
        employeeName: employeename,
        email: email,
        password: password,
      });
      alert("Registation Successfully");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
      <div class="container mt-4">
        <div class="card">
          <h1>Registation</h1>

          <form>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                id="employeename"
                placeholder="Enter Name"
                value={employeename}
                onChange={(event) => {
                  setEmployeename(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label>password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button style={{ margin: '10px' }} type="submit" class="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
            <button style={{ margin: '10px' }} type="button" className="btn btn-primary mt-4" onClick={() => navigate("/")}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

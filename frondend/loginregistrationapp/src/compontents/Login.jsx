import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8089/employee/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exists") {
              alert("Email not exists");
            } else if (res.data.message == "Login Success") {
              navigate('/home');
            } else {
              alert(" Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <h2>Login</h2>
          <hr />
        </div>

        <div class="row">
          <div class="col-sm-6">
            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
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
              <button type="submit" class="btn btn-primary" onClick={login}>
                Login
              </button>
              <button style={{ margin: '10px' }} type="button" className="btn btn-primary" onClick={() => navigate("/register")}>Registration</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

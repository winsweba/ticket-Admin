import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";

import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    slideForm: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // let navigate = useNavigate();

  const { createUser, login, currentUser } = useAuth();

  useEffect(() => {
    // console.log(formData.slideForm);
  }, [formData.slideForm]);

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // async function  () {
  
     useEffect(() => {
       console.log(currentUser)
     }, [])
     
    
  // }

  const handleFormSubmitLogin = async (event) => {
    event.preventDefault()

    try {
      await login(formData.email, formData.password)
      // navigate("/home")
    } catch {
      // setError("Failed to create an account")
    }
  }
  const handleFormSubmitSignUp = async (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match")
    }
    else{
      try {
        await createUser(formData.email, formData.password)
        // navigate("/home")
      } catch {
        // setError("Failed to create an account")
      }
    }
  }


  return (
    <div>
      {" "}
      <div className="body">
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">Login Form</div>
            <div className="title signup">Signup Form</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input
                className="radio"
                type="radio"
                name="slideForm"
                onChange={handleFormChange}
                value="login"
                id="login"
                checked={formData.slideForm === "login"}
              />
              <input
                className="radio"
                type="radio"
                name="slideForm"
                onChange={handleFormChange}
                value="signup"
                id="signup"
                checked={formData.slideForm === "signup"}
              />
              <label htmlFor="login" className="slide login">
                Login
              </label>
              <label htmlFor="signup" className="slide signup">
                Signup
              </label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              {formData.slideForm === "login" ? (
                <form action="#" className="login">
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  {/* <div className="pass-link">Forgot password?</div> */}
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input onClick={handleFormSubmitLogin} type="submit" value="Login" />
                  </div>
                  {/* <div className="signup-link">Not a member? Signup now</div> */}
                </form>
              ) : (
                <form action="#" className="signup">
                  <div className="field">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input onClick={handleFormSubmitSignUp} type="submit" value="Signup" />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

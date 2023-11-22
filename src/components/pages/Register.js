import React, { useState } from "react";

export default function Register() {
  const [userForm, setUserForm] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userFormError, setUserFormError] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    confirmPassword: null,
  });

  const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{5,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@%$#]).{8,}$/;

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    // Check Name
    if (name === "name") {
      setUserForm({
        ...userForm,
        name: value,
      });
      setUserFormError({
        ...userFormError,
        name:
          value.trim().length === 0
            ? "You should enter your name"
            : value.trim().length < 3
            ? "Your name must be more than or equal to 3 characters"
            : null,
      });
    }

    // Check User Name
    else if (name === "userName") {
      setUserForm({
        ...userForm,
        userName: value,
      });
      setUserFormError({
        ...userFormError,
        userName:
          value.trim().length === 0
            ? "You should enter your username"
            : !value.match(usernameRegex)
            ? "Invalid username, username must start with a letter and have only letters, numbers, underscores, and be between 5 to 30 characters"
            : null,
      });
    }

    // Check Email
    else if (name === "email") {
      setUserForm({
        ...userForm,
        email: value,
      });
      setUserFormError({
        ...userFormError,
        email:
          value.trim().length === 0
            ? "You should enter your email"
            : !value.match(emailRegex)
            ? "Invalid email, email should be in the format name@example.com"
            : null,
      });
    }

    // Check Password
    else if (name === "password") {
      setUserForm({
        ...userForm,
        password: value,
      });
      setUserFormError({
        ...userFormError,
        password:
          value.trim().length === 0
            ? "You should enter your password"
            : !value.match(passwordRegex)
            ? "Invalid password, minimum four characters, at least one letter and one number"
            : null,
      });
    }

    // Check Confirm Password
    else if (name === "confirmPassword") {
      setUserForm({
        ...userForm,
        confirmPassword: value,
      });
      setUserFormError({
        ...userFormError,
        confirmPassword:
          value.trim().length === 0
            ? "You should enter your confirm password"
            : value !== userForm.password
            ? "Passwords don't match"
            : null,
      });
    }
  };

  const isFormValid =
    !userFormError.name &&
    !userFormError.email &&
    !userFormError.userName &&
    !userFormError.password &&
    !userFormError.confirmPassword &&
    userForm.name &&
    userForm.email &&
    userForm.userName &&
    userForm.password &&
    userForm.confirmPassword;

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // You can submit the form data here, e.g., send it to an API or handle it on the server.
      console.log("Form Submitted Successfully");
    } else {
      console.log("Form Has Errors");
    }
  };

  return (
    <div className="border" style={{ margin: "50px 100px" }}>
      <h4 className="fw-bold m-5 text-start">Register Form</h4>
      <form className="text-start m-5">
        <div className="mb-3">
          {/* Name */}
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userForm.name}
            onChange={handleFormChange}
            required
          />
          {userFormError.name && (
            <div className="form-text text-danger text-start">
              {userFormError.name}
            </div>
          )}
        </div>
        {/* User Name */}
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userForm.userName}
            onChange={handleFormChange}
            required
          />
          {userFormError.userName && (
            <div className="form-text text-danger text-start ">
              {userFormError.userName}
            </div>
          )}
        </div>
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userForm.email}
            onChange={handleFormChange}
            required
          />
          {userFormError.email && (
            <div className="form-text text-danger text-start ">
              {userFormError.email}
            </div>
          )}
        </div>
        {/* Password */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userForm.password}
            onChange={handleFormChange}
            required
          />
          {userFormError.password && (
            <div className="form-text text-danger text-start ">
              {userFormError.password}
            </div>
          )}
        </div>
        {/* Confirm Password */}
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={userForm.confirmPassword}
            onChange={handleFormChange}
            required
          />
          {userFormError.confirmPassword && (
            <div className="form-text text-danger text-start ">
              {userFormError.confirmPassword}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitForm}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

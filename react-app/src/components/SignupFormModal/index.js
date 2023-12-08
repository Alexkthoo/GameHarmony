import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp, authenticate } from "../../store/session";
import "./SignupForm.css";
import { useHistory } from "react-router-dom";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorList = {};

    if (!username) errorList.username = "Please enter a username";
    if ((username && username.length < 5) || username.length > 25)
      errorList.username =
        "Please enter a username between 5 and 25 characters long";
    if (!email) errorList.email = "Please enter an email address";
    else if (email && !email.includes("@"))
      errorList.email = "Email must contain @ symbol";
    else if (email && !email.endsWith(".com"))
      errorList.email = "Email must end in .com";
    if (!password) errorList.password = "Please enter a password";
    if (password && password.length < 6)
      errorList.password = "Please enter a password longer than 6 characters";
    if (password !== confirmPassword)
      errorList.confirmPassword = "Passwords must match";

    if (Object.values(errorList).length > 0) {
      setErrors(errorList);
      return;
    }

    if (password === confirmPassword) {
      setErrors({});
      const res = await dispatch(signUp(username, email, password)).catch(
        (res) => res
      );
      if (res && res[0].startsWith("email")) {
        const errorList_email = { email: res[0].slice(8) };
        setErrors(errorList_email);
      } else {
        dispatch(authenticate());
        history.push("/games");
        closeModal();
      }
    } else {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p style={{ fontSize: "10px", color: "red" }}>*{errors.email}</p>
          )}
        </label>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && (
            <p style={{ fontSize: "10px", color: "red" }}>*{errors.username}</p>
          )}
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <p style={{ fontSize: "10px", color: "red" }}>*{errors.password}</p>
          )}
        </label>
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.confirmPassword}
            </p>
          )}
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;

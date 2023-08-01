import React, { useContext, useState } from "react";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { ContainerStyled } from "../Global/Components";
import { AuthContext } from "../context/AuthContext";

let schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const context = useContext(AuthContext);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema
        .validate(
          {
            username: username,
            password: password,
          },
          { abortEarly: false }
        )
        .then(() => {
          setIsLoading(true);

          axios
            .post("https://dummyjson.com/auth/login", {
              username,
              password,
            })
            .then((response) => {
              if (response.status === 200) {
                context.setIsAuthorized(true);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "fullName",
                  `${response.data.username} ${response.data.lastName}`
                );
              }

              // handle success
            })
            .catch((error) => {
              // handle error
              setErrors([error.message]);
            })
            .finally(() => {
              // always executed
              setIsLoading(false);
              setUsername("");
              setPassword("");
            });
        });
    } catch (err) {
      setErrors(err.errors);
    }
  };
  const handelInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  return (
    <ContainerStyled>
      <section style={{ marginBottom: "1.25rem" }}>
        Errors :<span style={{ color: "red" }}>{errors.join(" ,,, ")}</span>
      </section>
      <form onSubmit={(e) => handelSubmit(e)}>
        <label htmlFor="username">User name</label>
        <input
          id="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => handelInput(e)}
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => handelInput(e)}
        />
        <br />
        <br />
        <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        {context.isAuthorized ? <Navigate to="/dashboard" /> : ""}
      </form>
    </ContainerStyled>
  );
};

export default Form;

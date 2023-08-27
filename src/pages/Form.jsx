import React, { useContext, useState } from "react";
import * as yup from "yup";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { ContainerStyled } from "../Global/Components";
import { AuthContext } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//react hook form with yup
let schema = yup.object().shape({
  username: yup.string().required("the name of the user is required"),
  password: yup
    .string()
    .required("the password of the user is required")
    .min(6, "the password must be 6 char at least")
    .max(22, "the password must be 22 char at most"),
});

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorsNetWork, setErrorsNetWork] = useState([]);

  const context = useContext(AuthContext);

  const {
    setValue,
    resetField,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
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
                setValue("username", "ibrahim");
                // {username: 'ibrahim', password: '0lelplR'}
                console.log(data);
                // {username: 'kminchelle', password: '0lelplR'}
                context.setIsAuthorized(true);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem(
                  "fullName",
                  `${response.data.username} ${response.data.lastName}`
                );
              }
            })
            .catch((error) => {
              // handle error
              setErrorsNetWork([error.message]);
            })
            .finally(() => {
              // always executed
              setIsLoading(false);
              // reset({ username: "", password: "" });
              resetField("username");
              resetField("password");
            });
        });
    } catch (err) {}
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
        Errors :
        <span style={{ color: "red" }}>{errorsNetWork.join(" ,,, ")}</span>
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">User name</label>
        <input
          {...register("username")}
          id="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => handelInput(e)}
        />
        <p>{errors.username?.message}</p>

        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => handelInput(e)}
        />
        <p>{errors.password?.message}</p>

        <br />
        <br />
        <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        {context.isAuthorized ? <Navigate to="/dashboard" /> : ""}
      </form>
    </ContainerStyled>
  );
};

export default Form;

//Formik

// import { Formik, Form, Field, ErrorMessage } from "formik";

// const Form1 = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
{
  /*{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
       
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )} */
}

{
  /* {({ isSubmitting }) => (
        // element in Formik
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Form1; */
}

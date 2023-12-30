import React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
type Props = {};
interface MyFormValues {
  email: string;
  userName: string;
}

const Login = () => {
  const initialValues: MyFormValues = { email: "", userName: "" };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="email" />
          <br />
          <label htmlFor="userName">userName </label>
          <Field id="userName" name="userName" placeholder="userName" />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;

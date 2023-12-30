import React from "react";
import "./../../style/index.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "animate.css";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
interface MyFormValues {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);

    console.log("values: ", values);
    axios
      .post("http://localhost:5000/users", values)
      .then((res: AxiosResponse) => {
        console.log("response: ", res);

        if (res.status == 200) {
          alert("bu eamil var");
        }
        if (res.status == 201) {
          alert("ugurla kecdin");
          navigate("/");
        }
      });
  };
  const initialValues: MyFormValues = { email: "", password: "" };
  return (
    <div className="center-container">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <h1
          className="animate__animated animate__backInDown"
          style={{
            textAlign: "center",
            fontSize: "xxx-large",
            color: "#717378",
          }}
        >
          Register
        </h1>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            style={{ width: "300px" }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;

import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router";
import "./SignUp.css";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { use } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  //
  const handleSignUp = (values) => {
    console.log("========= values", values);
    const existingUser = users.find((user) => user.email === values.email);
    //
    if (existingUser) {
      window.alert("Email already exists");
      return;
    }
    //
    const newUser = {
      id: users.length + 1,
      ...values,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <div className="signup-box">
          <div className="left">
            <h2>Sign Up!</h2>
            <Form
              name="normal_login"
              initialValues={{ remember: true }}
              layout="vertical"
              requiredMark="optional"
              onFinish={handleSignUp}
            >
              <Form.Item
                name="fullName"
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Name"
                  className="border-gray-300"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Email"
                  className="border-gray-300"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder={"Password"}
                  className="border-gray-300"
                />
              </Form.Item>

              <Form.Item
                name="comfirmPassword"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder={"Comfirm Password"}
                  className="border-gray-300"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                >
                  {"Sign Up"}
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="right">
            <div className="ball-icon">
              <i className="fas fa-futbol"></i>
            </div>
            <h3>
              Sol <span>Music</span>
            </h3>
            <p>Already have an account?</p>
            <Link to="/login" className="signin-btn">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

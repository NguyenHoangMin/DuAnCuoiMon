import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
// import { use } from "react";
const { Text, Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const navigate = useNavigate();
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  //
  const handleLogin = (values) => {
    const user = users.find(
      (user) => user.email === values.email && user.password === values.password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
    } else {
      window.alert("Invalid email or password");
      return;
    }
  };

  return (
    <>
      <div className="container">
        <div className="login-box">
          {/* <div className="left">
            <img
              src="https://cuong.audio/wp-content/uploads/2017/07/dia_than1.jpg"
              alt="login image"
            />
          </div> */}

          <div className="right">
            <h2>Sign In</h2>

            <div>
              <Form
                name="normal_login"
                initialValues={{ remember: true }}
                layout="vertical"
                requiredMark="optional"
                onFinish={handleLogin}
              >
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
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    htmlType="submit"
                    className="w-full"
                  >
                    {"Log in"}
                  </Button>
                </Form.Item>
              </Form>

              <div className="signup">
                Not a member? <Link to="/sign-up">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

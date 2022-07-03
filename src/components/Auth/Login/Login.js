import React from "react";
import {
  Form,
  Input,
  Button,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../../../api";
import Footer from "../../../components/LandingPage/Footer/Footer";


const FormItem = Form.Item;

const Login = () => {
  const [isActive, setActive] = React.useState(false);
  const [isStep2, setIsStep2] = React.useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    AuthAPI.login(values).then((res) => {
      if (res?.status === 200) {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        form.resetFields();
        setIsStep2(true)
      }
    });
  };

  return (
    <div>
      <h1 style={{ backgroundColor: 'aquamarine', padding: '1rem', textAlign: 'center' }}>
        Sign In
      </h1>
      {
        isStep2 ?
          <div style={{ width: '30%', margin: 'auto', padding: '2.5rem', fontSize: '1rem', fontWeight: '600', color: 'white' }}>
            LoggedIn Successfully!
            <br />
            <Button
              style={{ width: '11rem', marginTop: '0.5rem' }}
              onClick={() => setIsStep2(false)}
              type="primary"
              block
            >
              Login to another account
            </Button>
          </div>
          :
          <div style={{ width: '30%', margin: 'auto', backgroundColor: 'white', padding: '2.5rem' }}>
            <Form
              form={form}
              layout="vertical"
              name="form_in_modal"
              onFinish={handleSubmit}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                  {
                    message: "invalid email!",
                    type: "email",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Email"
                  prefix={<UserOutlined />}
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Password"
                  type="password"
                  prefix={<LockOutlined />}
                  size="large"
                />
              </Form.Item>

              <Form.Item style={{ marginTop: "20px" }}>
                <Button
                  className="login-form-button"
                  htmlType="submit"
                  type="primary"
                  block
                >
                  SigIn
                </Button>
              </Form.Item>
            </Form>
          </div>
      }

      <Footer />
    </div>
  );
};

export default Login;

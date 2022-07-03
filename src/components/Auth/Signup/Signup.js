import React from "react";
import { Form, Input, Button, Checkbox, Image, Layout, Typography, Spin } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthAPI } from "../../../api";
import "./Signup.css";
import Footer from "../../../components/LandingPage/Footer/Footer";

const FormItem = Form.Item;

const Signup = () => {
  const [form] = Form.useForm();
  const [isActive, setActive] = React.useState(false);
  const [isStep2, setIsStep2] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    AuthAPI.signup(values).then((res) => {
      if (res?.status === 201) {
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        form.resetFields();
        setIsStep2(true)
      }
    });
  };

  return (
    <div>
      <h1 style={{ backgroundColor: 'aquamarine', padding: '1rem', textAlign: 'center' }}>
        Create an Account
      </h1>
      {
        isStep2 ?
          <div style={{ width: '46%', margin: 'auto', padding: '2.5rem', fontSize: '1rem', fontWeight: '600', color: 'white' }}>
            Account was created successfully, Keep your information in a safe place
            preferably not in a digital Format, Your have received a virtual credited of <span style={{ color: 'gold', marginRight: '0.2rem' }}>$1000</span>
            in order test the platform.
            <br />
            <Button
              style={{ width: '10rem', marginTop: '0.5rem' }}
              onClick={() => setIsStep2(false)}
              type="primary"
              block
            >
              Add another account
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
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Name"
                  prefix={<UserOutlined />}
                  size="large"
                />
              </Form.Item>

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
                  Signup
                </Button>
              </Form.Item>
            </Form>
          </div>
      }

      <Footer />
    </div>
  );
};

export default Signup;

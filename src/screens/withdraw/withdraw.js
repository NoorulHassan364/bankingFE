import React from "react";
import {
    Form,
    Input,
    Button,
} from "antd";
import {
    DollarCircleOutlined,
    LockOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
// import { AuthAPI } from "../../../api";
import Footer from "../../components/LandingPage/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AuthAPI } from "../../api";


const FormItem = Form.Item;

const Withdraw = () => {
    const [user, setUser] = React.useState();
    const [isStep2, setIsStep2] = React.useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const getUser = () => {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser) {
            AuthAPI.getUser(currentUser?._id).then((res) => {
                if (res?.status === 200) {
                    setUser(res?.data?.data);
                }
            });
        }
    };

    const handleSubmit = (values) => {
        let currentUser = JSON.parse(localStorage.getItem("user"));
        if (currentUser) {
            values.userId = currentUser?._id
            AuthAPI.withdrawTransaction(values).then((res) => {
                if (res?.status === 200) {
                    setIsStep2(true);
                    getUser();
                    form.resetFields()
                }
            });
        }
    };

    React.useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 style={{ backgroundColor: 'aquamarine', padding: '1rem', textAlign: 'center' }}>
                Withdraw Transaction
            </h1>
            {isStep2 ?
                <div style={{ width: '46%', margin: 'auto', padding: '2.5rem', fontSize: '1rem', fontWeight: '600', color: 'white' }}>
                    The Withdraw Transaction is Successfull your balance is,${user.accBalance}
                    <br />
                    <Button
                        style={{ width: '6rem', marginTop: '0.5rem' }}
                        onClick={() => setIsStep2(false)}
                        type="primary"
                        block
                    >
                        Withdraw
                    </Button>
                </div>
                :
                <div style={{ width: '30%', margin: 'auto', backgroundColor: 'white', padding: '2.5rem' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Account Balance:${user ? user.accBalance : '$0'}</h3>
                    <h4>Withdraw Amount</h4>
                    <Form
                        form={form}
                        layout="vertical"
                        name="form_in_modal"
                        onFinish={handleSubmit}
                    >
                        <Form.Item
                            name="withdrawAmount"
                            rules={[
                                {
                                    required: true,
                                    message: `required`,
                                },
                                {
                                    pattern: new RegExp(/^[0-9]+$/),
                                    message: 'Must be number',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter Amount"
                                prefix={< DollarCircleOutlined />}
                                size="large"
                            />
                        </Form.Item>

                        <Form.Item style={{ marginTop: "20px" }}>
                            <Button
                                style={{ width: '6rem' }}
                                htmlType="submit"
                                type="primary"
                                block
                            >
                                Withdraw
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }
            <Footer />
        </div>
    );
};

export default Withdraw;

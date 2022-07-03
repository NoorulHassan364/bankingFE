import { Table } from "antd";
import React, { useEffect } from "react";
import { AuthAPI } from "../../api";
// import { AuthAPI } from "../../../api";
import Footer from "../../components/LandingPage/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const AdminArea = () => {
    const [users, setUsers] = React.useState([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Account Balance',
            dataIndex: 'accBalance',
            key: 'accBalance',
        },
    ];


    const getAllUsers = () => {
        debugger;
        AuthAPI.allUsers().then((res) => {
            if (res.data.data.length > 0) {
                setUsers(res.data.data)
            }
        });
    };
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>
            <Navbar />
            <h1 style={{ backgroundColor: 'aquamarine', padding: '1rem', textAlign: 'center' }}>
                Administration Area
            </h1>

            <div style={{ width: '85%', margin: 'auto' }}>
                <Table pagination={false} columns={columns} dataSource={users} />
            </div>

            <Footer />
        </div>
    );
};

export default AdminArea;

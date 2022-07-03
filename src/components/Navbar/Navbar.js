import React from "react";
import { Avatar, Button, PageHeader, Typography, Dropdown, Menu } from "antd";

import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../context/userContext";

import "./Navbar.css";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  // const s1 = React.useContext(UserContext);
  const [user, setUser] = React.useState();
  const [key, setKey] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login");
  //   s1.update();
  // };

  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         key: "1",
  //         label: (
  //           <a
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             href="https://www.antgroup.com"
  //           >
  //             1st menu item
  //           </a>
  //         ),
  //       },
  //     ]}
  //   />
  // );

  // const menu = (
  //   <Menu>
  //     <Menu.Item key="progress" onClick={handleLogout}>
  //       logout
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        ghost={false}
        onBack={false}
        title={user ? `${user.name}'bank` : "Bank App"}
        extra={[
          // <Link to="/">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     Home
          //   </Typography>
          // </Link>,

          // <Link to="/signup">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     Create Account
          //   </Typography>
          // </Link>,

          // <Link to="/login">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     Login
          //   </Typography>
          // </Link>,

          // <Link to="/deposit">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     Deposit
          //   </Typography>
          // </Link>,

          // <Link to="/withdraw">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     Withdraw
          //   </Typography>
          // </Link>,

          // <Link to="/allData">
          //   <Typography
          //     level={"h5"}
          //     className="links"
          //   >
          //     All Data
          //   </Typography>
          // </Link>
          <Button className={key === 1 ? 'active' : ''} key="1" onClick={() => {
            setKey(1);
            navigate("/");
          }}>
            Home
          </Button>,
          <Button className={key === 2 ? 'active' : ''} key="2" onClick={() => {
            setKey(2);
            navigate("/signup");
          }}>
            Create Account
          </Button>,
          <Button key="3"
            className={key === 3 ? 'active' : ''}
            onClick={() => {
              setKey(3);
              navigate("/login");
            }}
          >Login
          </Button>,
          <Button key="4"
            className={key === 4 ? 'active' : ''}
            onClick={() => {
              setKey(4);
              navigate("/deposit");
            }}>
            Deposit
          </Button>,
          <Button key="5"
            className={key === 5 ? 'active' : ''}
            onClick={() => {
              setKey(5);
              navigate("/withdraw");
            }}>

            Withdraw
          </Button>,
          <Button key="6"
            className={key === 6 ? 'active' : ''}
            onClick={() => {
              setKey(6);
              navigate("/allData");
            }}
          >
            All Data
          </Button>,
        ]}
      />
    </div>
  );
};

export default Navbar;

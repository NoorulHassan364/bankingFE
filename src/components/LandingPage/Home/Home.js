import React from "react";
import "./Home.css";
import bank2 from "../../../assets/images/bank2.jpg"

const Home = () => {
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div>
      <h1 style={{ backgroundColor: 'aquamarine', padding: '1rem', textAlign: 'center' }}>
        Welcome to {user ? `${user.name}'bank` : "My bank"}
      </h1>
      <div style={{ width: '30rem', margin: 'auto', marginTop: '2rem' }}>
        <img src={bank2} style={{ width: '30rem' }} alt="" />
      </div>

    </div>
  );
};

export default Home;

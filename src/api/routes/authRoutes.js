import axios from "../axiosConfig";

class Routes {
  login(data) {
    return axios.post("/auth/login", data);
  }
  signup(data) {
    return axios.post("/auth/signup", data);
  }

  allUsers() {
    return axios.get("/auth/allUsers");
  }

  getUser(id) {
    return axios.get("/auth/getUser/" + id);
  }

  depositTransaction(values) {
    return axios.post("/auth/deposit", values);
  }

  withdrawTransaction(values) {
    return axios.post("/auth/withdraw", values);
  }
}

export default new Routes();

import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedAuthRoute from "./protectedAuthRoutes";
import Loader from "../components/Loader/Loader";
import Deposit from "../screens/deposit/deposit";
import Withdraw from './../screens/withdraw/withdraw';
import AdminArea from "../screens/allData/AllData";

const LandingPage = lazy(() => import("../screens/LandingPage/LandingPage"));
const Login = lazy(() => import("../screens/Auth/Login/Login"));
const Signup = lazy(() => import("../screens/Auth/Signup/Signup"));

export default function AppRoutes() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route
          exact
          path="/login"
          element={
            // <ProtectedAuthRoute>
            <Login />
            // </ProtectedAuthRoute>
          }
        />
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route
          exact
          path="/signup"
          element={
            // <ProtectedAuthRoute>
            <Signup />
            // </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/deposit"
          element={
            // <ProtectedAuthRoute>
            <Deposit />
            // </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/withdraw"
          element={
            // <ProtectedAuthRoute>
            <Withdraw />
            // </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/allData"
          element={
            // <ProtectedAuthRoute>
            <AdminArea />
            // </ProtectedAuthRoute>
          }
        />
      </Routes>
    </React.Suspense>
  );
}

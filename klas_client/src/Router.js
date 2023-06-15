import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import HomePage from "./pages/Home/HomePage";
import Navigation from "./components/Navigation";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import LecturePlanDetailPage from "./pages/LecturePlan/LecturePlanDetailPage";
import LecturePlanListPage from "./pages/LecturePlan/LecturePlanListPage";
import GradePage from "./pages/User/GradePage";
import Modal from "./components/Modal";
import CallbackPage from "./pages/User/CallbackPage";

function Router() {
  const { userType, setUserType } = useContext(UserContext); //0은 비회원 1은 학생 2는 교수 3은 관리자
  const [modal, setModal] = useState(false);
  return (
    <div class="flex flex-col h-screen pt-[10px]">
      <BrowserRouter>
        {userType !== 0 ? (
          <div class=" ">
            <Navigation />
          </div>
        ) : (
          ""
        )}
        <Modal modal={modal} setModal={setModal} />
        <Routes>
          <Route
            path="/"
            element={<SignInPage modal={modal} setModal={setModal} />}
          />
          <Route path="/users">
            <Route path="grade" element={<GradePage />} />
            <Route
              path="signin"
              element={<SignInPage modal={modal} setModal={setModal} />}
            />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="callback" element={<CallbackPage />} />
          </Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/lecture/plan">
            <Route path="list" element={<LecturePlanListPage />} />
            <Route path="detail" element={<LecturePlanDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

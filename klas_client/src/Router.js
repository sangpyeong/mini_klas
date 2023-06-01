import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/User/SignUpPage";
import SignInPage from "./pages/User/SignInPage";
import HomePage from "./pages/Home/HomePage";

function Router() {
  return (
    <div class="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/users">
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

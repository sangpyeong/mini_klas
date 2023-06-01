import React, { Component } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp/SignUpPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/users">
            <Route path="signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

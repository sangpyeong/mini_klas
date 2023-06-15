import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function CallbackPage() {
  const location = useLocation();
  const { setUserType } = useContext(UserContext);
  const sessionuserId = localStorage.getItem("userId");
  const params = new URLSearchParams(location.search);
  // 파라미터 값 가져오기
  const paramValue = params.get("code");
  console.log(paramValue, sessionuserId);
  axios
    .post("http://localhost:8080/users/kakao", {
      userId: { sessionuserId },
      code: { paramValue },
    })
    .then(() => {
      setUserType(1);
      window.location.href = "http://localhost:3000/home";
    })
    .catch();
  return (
    <div>
      {paramValue}
      {sessionuserId}
    </div>
  );
}
export default CallbackPage;

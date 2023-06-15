import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function CallbackPage() {
  const location = useLocation();
  const { userId } = useContext(UserContext);
  const params = new URLSearchParams(location.search);
  // 파라미터 값 가져오기
  const paramValue = params.get("code");
  axios
    .post("http://localhost:8080/users/kakao", {
      userId: { userId },
      code: { paramValue },
    })
    .then((window.location.href = "http://localhost:3000/home"))
    .catch();
  return <div>{paramValue}</div>;
}
export default CallbackPage;

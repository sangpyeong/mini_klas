import axios from "axios";
import React, { useState, createContext } from "react";

// 새로운 Context 생성
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userType, setUserType] = useState(0); // 초기 userType 설정
  const [userId, setUserId] = useState();
  // const sessionuserId = localStorage.getItem("userId");
  // if (userId) {
  //   localStorage.setItem("userId", userId);
  // } else if (sessionuserId) {
  //   axios.get("http://localhost:8080/users/me", {
  //     headers: { sessionid: sessionuserId },
  //   });
  // }

  return (
    <UserContext.Provider value={{ userType, setUserType, userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  );
};

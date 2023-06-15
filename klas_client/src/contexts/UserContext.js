import axios from "axios";
import React, { useState, createContext } from "react";

// 새로운 Context 생성
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userType, setUserType] = useState(0); // 초기 userType 설정
  const [userId, setUserId] = useState();
  const sessionuserId = localStorage.getItem("userId");
  if (userId) {
    //localStorage.setItem("userId", userId);
    
  }
  else if (sessionuserId) {
    axios
      .post("http://localhost:8080/users/me", 
       { userId: sessionuserId },
      )
      .then((result) => {
        console.log(result + "hihi");
        setUserId(sessionuserId);
        if(result==0){
          console.log("hihi");
          setUserType(1);
        }
        else if(result==1){
          setUserType(2);
          console.log("hihi22");
        }
        else if(result==2)
          setUserType(0);
        console.log(userType);
      })
      .catch((err) => {
        console.log(err);
        // localStorage.removeItem("userId");////문제
        // localStorage.removeItem("userType");
      });
  }

  return (
    <UserContext.Provider value={{ userType, setUserType, userId, setUserId }}>
      {props.children}
    </UserContext.Provider>
  );
};

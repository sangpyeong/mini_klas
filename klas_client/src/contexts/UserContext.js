import React, { useState, createContext } from "react";

// 새로운 Context 생성
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(0); // 초기 userType 설정

  return (
    <UserContext.Provider value={[userType, setUserType]}>
      {children}
    </UserContext.Provider>
  );
};

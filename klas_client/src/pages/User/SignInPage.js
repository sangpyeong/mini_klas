import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useRef } from "react";

function SignInPage({ modal, setModal }) {
  const [password, setPaaword] = useState("");
  const { userId, setUserId, userType, setUserType } = useContext(UserContext);
  const [type, setType] = useState(0);
  const radioRef = useRef();
  return (
    <div class="flex flex-col justify-center items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8]">
      <div class="flex justify-center flex-col items-center h-[50%] w-[50%]  rounded-[100px]">
        <div class="text-[100px]">mini-klas</div>
        <div>
          <Input type="text" onChange={setUserId} placeholder="학번" />
        </div>
        <div class="mt-1">
          <Input type="text" onChange={setPaaword} placeholder="비밀번호" />
        </div>

        <div class="flex justify-center flex-row mt-2">
          <Button
            text="로그인"
            onClick={() => {
              axios
                .post("http://localhost:8080/users", 
                {
                  
                    userId: userId,
                    password: password,
                }
                  ,
                  {
                    headers: {
                      "Content-type": "application/json",
                      Accept: "application/json",
                    },
                  }
                )
                .then((res) => {
                  console.log(res);
                  localStorage.setItem("userId", userId);
                  localStorage.setItem("userType", type);
                  setUserType(type);
                })
                .catch((err) => {
                  console.log(err.response);
                });
            }}
          />
          <Link to="/users/signup">
            <Button text="회원가입" />
          </Link>
        </div>

        <Link to="/home">
          <Button
            text="test"
            onClick={() => {
              setUserType(1);
              setUserId(2018202086);
              localStorage.setItem("userType", 1);
              localStorage.setItem("userId", 2018202086);
            }}
          />
        </Link>
        <Button
          text="카카오"
          onClick={() => {
            setModal(true);
          }}
        />
      </div>
    </div>
  );
}

export default SignInPage;

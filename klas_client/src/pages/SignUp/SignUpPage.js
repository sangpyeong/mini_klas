import React, { useState } from "react";
import Input from "../../components/Input";

function SignUpPage() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPaaword] = useState("");
  const [userType, setUserType] = useState("");

  return (
    <div class="flex flex-col justify-center items-center  h-screen">
      <div class="flex justify-center flex-col items-center h-[50%] w-[50%] border-[5px]">
        <div class="text-[100px]">로고</div>

        <Input type="text" onChange={setName} placeholder="이름" />
        <Input type="text" onChange={setUserId} placeholder="학번" />
        <Input type="text" onChange={setPaaword} placeholder="비밀번호" />
        <div class="flex flex-row">
          <label>학생</label>
          <Input type="radio" onChange={setUserType} placeholder="관리자" />
          <label>교수</label>
          <Input type="radio" onChange={setUserType} placeholder="관리자" />
          <label>관리자</label>
          <Input type="radio" onChange={setUserType} placeholder="관리자" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";

function KakaoLoginPage() {
  const { userId, setUserId } = useContext(UserContext);
  console.log(userId);
  return (
    <div className="flex flex-col justify-center text-[15px] items-center h-full w-full">
      <div className="text-[20px]">카카오로그인</div>
      <Input type="text" onChange={setUserId} placeholder="학번" />
      <Link to="https://kauth.kakao.com/oauth/authorize?client_id=2ab2ae3d4a5108ea9081265e2802998b&redirect_uri=http://localhost:3000/users/callback&response_type=code">
        <Button
          text="로그인"
          onClick={() => {
            // const location = useLocation();
            // const params = new URLSearchParams(location.search);
            // // 파라미터 값 가져오기
            // const paramValue = params.get("code");
          }}
        />
      </Link>
    </div>
  );
}

export default KakaoLoginPage;

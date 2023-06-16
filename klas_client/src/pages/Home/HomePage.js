import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function HomePage() {
  const { userId } = useContext(UserContext);
  const [schedule, setSchedule] = useState([
    [
      "1",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
    [
      "2",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
    [
      "3",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
    [
      "4",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
    [
      "5",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
    [
      "6",
      "소프트웨어공학 (새빛205 / 이기훈)",
      "컴퓨터활용 (비513 / 정계동)",
      "인터넷활용 (비513 / 김진수)",
      "산학협력캡스톤설계1 (새빛102 / 이형근)",
      "",
      "",
    ],
  ]);
  const [classlist, setClasslist] = useState([
    [
      "H020-4-3680-01",
      "소프트웨어프로젝트1",
      "컴퓨터정보공학부",
      "전선",
      "3",
      "B+",
    ],
    ["H020-3-8994-01", "컴퓨터구조실험", "컴퓨터정보공학부", "전선", "1", "A+"],
    ["H020-4-3680-01", "컴퓨터구조실험", "컴퓨터정보공학부", "전선", "1", "A+"],
  ]);
  const schedule_header = ["", "월", "화", "수", "목", "금", "토"];
  const class_header = [
    "학정번호",
    "과목명",
    "개설학과",
    "이수구분",
    "학점",
    "성적",
  ];
  useEffect(() => {
    /*axios
      .post("http://localhost:8080/schedule", { userId: userId })
      .then((res) => {
        console.log(res.data);
        const time = Array.from(
          { length: res.data.length },
          (_, index) => `${index + 1}`
        );
        const result = res.data.map((row, index) => [time[index], ...row]);
        setSchedule(result);
      })
      .catch((err) => {
        console.log(err.response);
      });
    axios
      .post("http://localhost:8080/classlist", { userId: userId })
      .then((res) => {
        console.log(res.data);
        setClasslist(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });*/
  }, []);
  return (
    <div className="flex flex-col justify-start items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div className="flex text-[25px] mt-[3%] w-[60%] h-[5%] border-[2px] items-center bg-white rounded-[10px]">
        <div className="ml-4">시간표</div>
      </div>
      <div className="inline-block mt-[3%] border-collapse h-[35%] text-[15px] w-[60%] overflow-y-auto">
        <Table header={schedule_header} data={schedule} />
      </div>
      <div className="flex text-[25px] mt-[3%] w-[60%] h-[5%] border-[2px] items-center bg-white rounded-[10px]">
        <div className="ml-4">수강과목</div>
      </div>
      <div className="inline-block mt-[3%] border-collapse h-[35%] text-[15px] w-[60%] overflow-y-auto">
        <Table header={class_header} data={classlist} />
      </div>
    </div>
  );
}

export default HomePage;

import React, { useEffect, useState } from "react";
import Table from "../../components/Table";

function HomePage() {
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
  const schedule_header = ["", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col justify-start items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div className="flex flex-row mt-[3%] border-collapse h-[35%] text-[15px] w-[60%] ">
        <Table header={schedule_header} data={schedule} />
      </div>
    </div>
  );
}

export default HomePage;

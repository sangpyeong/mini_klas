import React, { useEffect, useState } from "react";

function HomePage() {
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {}, []);
  return (
    <div class="flex flex-col justify-start items-center  h-screen bg-gradient-to-b from-white to-[#C8D6E8] ">
      <div class="flex flex-row mt-[3%] border-collapse h-[30%] w-[60%] border-[1px] rounded-[20px]">
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]"></th>
              <th class="w-[15%] border-[1px] rounded-[20px]">월</th>
              <th class="w-[15%] border-[1px] rounded-[20px]">화</th>
              <th class="w-[15%] border-[1px] rounded-[20px]">수</th>
              <th class="w-[15%] border-[1px] rounded-[20px]">목</th>
              <th class="w-[15%] border-[1px] rounded-[20px]">금</th>
              <th class="w-[15%] border-l-[1px] border-b-[1px] rounded-[20px]">
                토
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]">
                1교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
            </tr>
            <tr>
              <td class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]">
                2교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
            </tr>
            <tr>
              <td class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]">
                3교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
            </tr>
            <tr>
              <td class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]">
                4교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
            </tr>
            <tr>
              <td class="w-[10%] border-r-[1px] border-b-[1px] rounded-[20px]">
                5교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
            </tr>
            <tr>
              <td class="w-[10%] border-r-[1px] border-t-[1px] rounded-[20px]">
                6교시
              </td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-[1px] rounded-[20px]">1</td>
              <td class="w-[15%] border-l-[1px] border-t-[1px] rounded-[20px]">
                1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;

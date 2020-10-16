import React from "react";
import "../Style/WeekPlan.css";

function WeekPlan(props) {
  const { location } = props;

  return (
    <div className="weekplan-box">
      <header className="weekplan-header">헤더[요일 토글버튼]</header>
      <main className="weekplan-main">
        <span>주간 계획표</span>
        {console.log(location.state)}
      </main>
    </div>
  );
}

//이곳은 시간표의 변경 사안을 전송하고, 이 시간표에 해당하는 id를 가진 정보를 가져와야 한다.
export default WeekPlan;

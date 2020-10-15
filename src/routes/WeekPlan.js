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

export default WeekPlan;

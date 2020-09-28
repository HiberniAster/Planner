import React from "react";
import "../Style/LeftBox.css";
import logo from "../img/logo.png";

function LeftBox() {
	return (
		<div className="allBox">
			<img src={logo} className="logo" />
			<div className="leftbox">
				<i className="fas fa-plus fa-3x button-icon"></i>
				<span className="button-text">새로 만들기</span>
				<button className="newPlan"></button>
				<ul class="plans rel-plan">
					<span className="plan-text">최근 수정한 계획</span>
					<li className="plan plan-top">haha-수정된 날짜</li>
					<li className="plan">hehe</li>
					<li className="plan">hoho</li>
				</ul>
				<ul class="plans imp-plan">
					<span className="plan-text">중요 표시한 계획</span>
					<li className="plan plan-top">haha</li>
					<li className="plan">hehe</li>
					<li className="plan">hoho</li>
				</ul>
				<ul class="plans all-plan">
					<span className="plan-text">모든 계획</span>
					<li className="plan plan-top">haha</li>
					<li className="plan">hehe</li>
					<li className="plan">hoho</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftBox;

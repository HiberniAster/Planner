import React from "react";
import "../Style/LeftBox.css";
import logo from "../img/logo.png";

let flag = true;

function newPlanButtonClicked() {
	let menuBox = document.getElementsByClassName("menu-box")[0];

	if (flag === false) {
		flag = true;
		menuBox.style.display = "none";
	} else if (flag === true) {
		flag = false;
		menuBox.style.display = "block";
	}
}

function menuToggleButtonClicked() {
	let button = document.getElementsByClassName("menu-toggle-button")[0];

	if (button.textContent === "원시간표") {
		button.innerHTML = "주간시간표";
	} else {
		button.innerHTML = "원시간표";
	}
}

function timeCheckboxActived() {
	let checkboxes = document.getElementsByClassName("time-checkbox");

	checkboxes[0].addEventListener("change", () => {
		if (checkboxes[0].checked) {
			checkboxes[1].checked = false;
		}
	});

	checkboxes[1].addEventListener("change", () => {
		if (checkboxes[1].checked) {
			checkboxes[0].checked = false;
		}
	});
}

function LeftBox() {
	return (
		<div className="allBox">
			<img src={logo} className="logo" alt="logo" />
			<div className="leftbox">
				<i className="fas fa-plus fa-3x button-icon"></i>
				<span className="button-text">새로 만들기</span>
				<button className="newPlan" onClick={newPlanButtonClicked}></button>
				<div className="menu-box">
					<div className="menu-box__toggle">
						<button
							className="menu-toggle-button"
							onClick={menuToggleButtonClicked}
						>
							원시간표
						</button>
					</div>
					<div className="menu-box__cycle">
						<span>시간표 주기</span>
						<select>
							<option>10분</option>
							<option>30분</option>
							<option>60분</option>
						</select>
					</div>
					<div className="menu-box__appoint">
						<span>지정시간</span>
						<input
							type="checkbox"
							className="time-checkbox"
							onClick={timeCheckboxActived}
						/>{" "}
						or <span>24시</span>
						<input
							type="checkbox"
							className="time-checkbox"
							onClick={timeCheckboxActived}
						/>
						<input className="time time-start" />
						부터 <input className="time time-end" />
						까지
					</div>
					<button className="menu-confirmBtn">확인</button>
				</div>
				<ul className="plans rel-plan">
					<span className="plan-text">최근 수정한 계획</span>
					<li className="plan plan-top">haha-수정된 날짜</li>
					<li className="plan">hehe</li>
					<li className="plan">hoho</li>
				</ul>
				<ul className="plans imp-plan">
					<span className="plan-text">중요 표시한 계획</span>
					<li className="plan plan-top">haha</li>
					<li className="plan">hehe</li>
					<li className="plan">hoho</li>
				</ul>
				<ul className="plans all-plan">
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
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

function LeftBox() {
	function menuToggleButtonClicked() {
		let button = document.getElementsByClassName("menu-toggle-button")[0];
		setType(!type);
		if (button.textContent === "원시간표") {
			button.innerHTML = "주간시간표";
		} else {
			button.innerHTML = "원시간표";
		}
	}

	function timeIntervalSelect() {
		const selected = document.getElementsByClassName("time-interval")[0].value;
		setTimeInterval(selected);
	}

	function timeCheckboxActived() {
		let checkboxes = document.getElementsByClassName("time-checkbox");

		checkboxes[0].addEventListener("change", () => {
			setTimeCheckbox("specified");
			if (checkboxes[0].checked) {
				checkboxes[1].checked = false;
			}
			checkboxes[0].removeEventListener("change", () => {});
		});

		checkboxes[1].addEventListener("change", () => {
			setTimeCheckbox("24");

			if (checkboxes[1].checked) {
				checkboxes[0].checked = false;
			}
			checkboxes[1].removeEventListener("change", () => {});
		});
	}

	const [type, setType] = useState(true);
	const [timeInterval, setTimeInterval] = useState("10");
	const [timeCheckbox, setTimeCheckbox] = useState("specified");

	return (
		<div className="allBox">
			<Link to="/">
				<img src={logo} className="logo" alt="logo" />
			</Link>
			<div className="leftbox">
				<i className="fas fa-plus fa-3x button-icon"></i>
				<span className="button-text">새로 만들기</span>
				<button className="btn newPlan" onClick={newPlanButtonClicked}></button>
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
						<select className="time-interval" onChange={timeIntervalSelect}>
							<option value="10">10분</option>
							<option value="30">30분</option>
							<option value="60">60분</option>
						</select>{" "}
						<br />
						<span>You selected {timeInterval}</span>
					</div>
					<div className="menu-box__appoint">
						<span>지정시간</span>
						<input
							type="checkbox"
							className="time-checkbox"
							defaultChecked="true"
							onClick={timeCheckboxActived}
						/>{" "}
						or <span>24시</span>
						<input
							type="checkbox"
							className="time-checkbox"
							onClick={timeCheckboxActived}
						/>{" "}
						<br />
						<span>You checked {timeCheckbox}</span>
						<br /> <br />
						(24시) <br />
						<input className="time time-start" />
						부터 <input className="time time-end" />
						까지
					</div>

					{type ? (
						<Link
							to={{
								pathname: "/weekplan",
								state: { timeInterval: timeInterval },
							}}
						>
							<button className="confirm-btn">주간 계획표</button>
						</Link>
					) : (
						<Link to="/pieplan">
							<button className="confirm-btn">원 계획표</button>
						</Link>
					)}
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

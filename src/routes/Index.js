import React from "react";
import "../Style/Index.css";

function Index() {
	return (
		<div className="box">
			<div className="header-box">헤더박스/요일 탭 만들 박스</div>
			<div className="mainbox">
				<span> 메인 계획들 표시할 박스!!!</span>
				<div className="planViews">
					<div className="planViews-first">
						<div className="planView__relative ">
							<div className="planView-preview">미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-clipboard-list fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview">미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-clipboard-list fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview">미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-clipboard-list fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview">미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-clipboard-list fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
					</div>
					<div className="planViews-second">
						<div className="planView__relative ">
							<div className="planView-preview"> 미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-chart-pie fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview"> 미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-chart-pie fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview"> 미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-chart-pie fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div className="planView-preview"> 미리보기 영역</div>
							<div className="planView-desc">
								<i className="fas fa-chart-pie fa-2x plan-icon"></i>
								<span className="plan-title">계획 제목</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;

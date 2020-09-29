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
							<div class="planView-preview">미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview">미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview">미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview">미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
					</div>
					<div className="planViews-second">
						<div className="planView__relative ">
							<div class="planView-preview"> 미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview"> 미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview"> 미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
						<div className="planView__relative ">
							<div class="planView-preview"> 미리보기 영역</div>
							<div class="planView-desc">
								<i className="fas fa-clipboard-list fa-2x"></i>
								<span>계획</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;

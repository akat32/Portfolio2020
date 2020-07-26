import React, { useState, useEffect } from 'react';

import './styles.scss';
export const ProjectSelector = (props) => {
	return (
		<div className="MobileProjectSelector">
			{props.selectorOpen ? <div className="backBlur" onClick={() => props.setSelectorOpen()} /> : null}
			<div className="selectorMenu" style={{ bottom: props.selectorOpen ? 0 : '-100vh' }}>
				<div className="titleLine">
					<p className="title">기종 선택</p>
					<div className="dump" />
					<p className="close" onClick={() => props.setSelectorOpen()}>
						닫기
					</p>
				</div>
				<div className="titleLine">
					<p className="title">프로젝트 선택</p>
				</div>
			</div>
		</div>
	);
};

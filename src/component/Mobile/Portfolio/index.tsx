import React, { useState } from 'react';

import './style.scss';

import { ProjectSelector } from './ProjectSelector';
import { View } from './ProjectView';
import { ProjectInfo } from './ProjectInfo';
export const MobilePortfolio = (props) => {
	const [selectorOpen, setSelectorOpen] = useState(true);
	return (
		<div className="mobileProject">
			{/* selecotr */}
			<div
				className="selectorOpen"
				onClick={() => {
					setSelectorOpen((selectorOpen) => !selectorOpen);
				}}
			>
				프로젝트 설정
			</div>
			<ProjectSelector
				setSelectorOpen={() => setSelectorOpen(false)}
				selectorOpen={selectorOpen}
				language={props.language.selector}
				lang={props.lang}
			/>
			<div className="contant">
				<ProjectInfo language={props.language.info} lang={props.lang} />
				<View lang={props.lang} />
			</div>
		</div>
	);
};

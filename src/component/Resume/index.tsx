import React from 'react';
import './styles.scss';
// import { Document, Page } from "react-pdf";

export const Resume = (props) => {
	return (
		<div className="Resume">
			<div className="innerPdf">
				{/* <h1>2020. 6. 20. 예정</h1> */}
				{props.lang === 'EN' ? (
					<iframe src="https://docs.google.com/viewer?srcid=1UhCa1bI93_Q8epybEzoBU1ikKJw-lbL2&pid=explorer&efh=false&a=v&chrome=false&embedded=true" />
				) : (
					<iframe src="https://docs.google.com/viewer?srcid=1UhCa1bI93_Q8epybEzoBU1ikKJw-lbL2&pid=explorer&efh=false&a=v&chrome=false&embedded=true" />
				)}
			</div>
		</div>
	);
};

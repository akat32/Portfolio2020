import React from 'react';
import './styles.scss';
// import { Document, Page } from "react-pdf";

export const Resume = (props) => {
	return (
		<div className="Resume">
			<div className="innerPdf">
				{/* <h1>2020. 6. 20. 예정</h1> */}
				{props.lang === 'EN' ? (
					<iframe src="https://docs.google.com/viewer?srcid=1IJJyFqKkUkqndItLn8_lzE1T4j3Gr5HJ&pid=explorer&efh=false&a=v&chrome=false&embedded=true" />
				) : (
					<iframe src="https://docs.google.com/viewer?srcid=1IJJyFqKkUkqndItLn8_lzE1T4j3Gr5HJ&pid=explorer&efh=false&a=v&chrome=false&embedded=true" />
				)}
			</div>
		</div>
	);
};

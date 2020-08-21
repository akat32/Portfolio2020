import React from 'react';
import './styles.scss';
export const MobileResume = (props) => {
	return (
		<div className="Resume ResumeMobile">
			<div className="mobileInnerPdf">
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

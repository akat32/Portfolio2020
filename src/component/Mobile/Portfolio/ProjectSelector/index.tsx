import React, { useState, useEffect, useMemo } from 'react';
import { ProjectData } from '../../../../context/ProjectData';
import { ProjectDataEN } from '../../../../context/ProjectDataEN';
import { useDeviceDispatch } from '../../../../context/DeviceContext';
import { useProjectState, useProjectDispatch } from '../../../../context/ProjectContext';
import './styles.scss';
export const ProjectSelector = (props) => {
	let state = useProjectState();
	let number = state.number;
	const [info, setInfo] = useState(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	useMemo(() => {
		setInfo(props.lang === 'EN' ? ProjectDataEN[number] : ProjectData[number]);
	}, [number, props.lang]);
	return (
		<div className="MobileProjectSelector">
			{props.selectorOpen ? <div className="backBlur" onClick={() => props.setSelectorOpen()} /> : null}
			<div className="selectorMenu" style={{ bottom: props.selectorOpen ? 0 : '-100vh' }}>
				<div className="titleLine">
					<p className="title">기종 선택</p>
					<div className="dump" />"
					<p className="close" onClick={() => props.setSelectorOpen()}>
						닫기
					</p>
				</div>
				<DeviceSelector info={info} />
				<div className="titleLine">
					<p className="title">프로젝트 선택</p>
				</div>
			</div>
		</div>
	);
};

const DeviceSelector = (info: any) => {
	const dispatch: any = useDeviceDispatch();
	const projectDevice: any = useProjectDispatch();
	return (
		<div className="MobileDeviceSelector">
			{info.info.iphone.length !== 0 ? (
				<>
					<div style={{ flex: 1 }} />
					<div
						className="Iphone"
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_IPHONE' });
						}}
					>
						<div className="img" />
					</div>
					<div style={{ flex: 1 }} />
				</>
			) : null}
			{info.info.tablet.length !== 0 ? (
				<>
					<div style={{ flex: 1 }} />
					<div
						className="Tablet"
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_TABLET' });
						}}
					>
						<div className="img" />
					</div>
					<div style={{ flex: 1 }} />
				</>
			) : null}
			{info.info.computer.length !== 0 ? (
				<>
					<div style={{ flex: 1 }} />

					<div
						className="Computer"
						onClick={() => {
							projectDevice({ type: 'RESET_PROJECTIMG' });
							dispatch({ type: 'CHANGE_COMPUTER' });
						}}
					>
						<div className="img" />
					</div>
					<div style={{ flex: 1 }} />
				</>
			) : null}
		</div>
	);
};

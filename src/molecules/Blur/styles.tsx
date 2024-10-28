import styled from "@emotion/styled";

export const BlurWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

export const BlurBody = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(2px);
	z-index: 0;
`;

export const BlurHeader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const BlurTitle = styled.div``;

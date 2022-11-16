import styled, { css } from "styled-components";

const Layout = ({ children, ...props }) => {
	return <StLayout {...props}>{children}</StLayout>;
};
export default Layout;

const StLayout = styled.div`
	display: flex;
	align-items: center;

	${({ variant }) => {
		switch (variant) {
			// 전체 페이지 공통 레이아웃
			case "commonLayout":
				return css`
					min-width: 320px;
					max-width: 430px;
					min-height: 130vh;
					margin: 0 auto;
					align-items: flex-start;
					margin: 0 auto;
					height: 100%;
					position: relative;
				`;
			default:
				break;
		}
	}}
`;

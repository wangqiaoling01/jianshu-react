import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
	position: relative;
	height: 58px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
	href: '/',
})`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 945px;
	height: 100%;
	margin: 0 auto;
	padding: 0 70px;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px;
	font-size: 17px;
	padding: 0 15px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	float: left;
	position: relative;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 4px;
		width: 30px;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索',
})`
	width: 160px;
	height: 38px;
	border: none;
	padding: 0 40px 0 20px;
	box-sizing: border-box;
	outline: none;
	margin-top: 9px;
	margin-left: 20px;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&.slide-enter {
		transition: all 0.2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all 0.2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 0px;
	top: 60px;
	width: 260px;
	padding: 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
	background: white;
`;

export const SearchInfoTitle = styled.div`
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all 0.2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	line-height: 20px;
	padding: 0 5px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;
export const SearchInfoList = styled.div`
	overflow: hidden;
`;
export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writing {
		color: #fff;
		background: #ec6149;
	}
`;

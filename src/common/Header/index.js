import React, { Component } from 'react';
import {
	HeaderWrapper, 
	Logo, 
	Nav, 
	NavItem, 
	NavSearch, 
	Addition, 
	Button, 
	SearchWrapper,
	SearchInfo, 
	SearchInfoTitle, 
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';
import '../../statics/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators }  from './store';


class Header extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			spinIcon: React.createRef(null)
		}
	}
	
	render() {
		const { focused, list, handleInputFocus, handleInputBlur } = this.props;
		const nodeRef = React.createRef(null);

		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载APP</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<span className="iconfont">&#xe636;</span>
					</NavItem>

					<SearchWrapper>
						<CSSTransition timeout={200} in={focused} nodeRef={nodeRef}>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</span>
						{/* 热门搜索 */}
						{ this.getListArea() }
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writing">
						<span className="iconfont">&#xe624;</span>
						写文章
					</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}

	getListArea() {
		const {
			focused,
			list, 
			page, 
			totalPage, 
			mouseIn, 
			handleMouseEnter, 
			handleMouseLeave, 
			handleChangePage 
		} = this.props
		
		const newList = list.toJS()
		const pageList = []

		if(newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}> 
						{ newList[i] } 
					</SearchInfoItem>
				)
			}
		}

		if(focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={handleMouseEnter} 
					onMouseLeave={handleMouseLeave}>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
							<span ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</span>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{ pageList }
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null
		}
	}
}


const mapStateToProps = state => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInputFocus(list) {
			// Ajax 请求搜索数据
			(list.size === 0) && dispatch(actionCreators.getList())			
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			// 换一批 的 动画效果
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')

			if(originAngle) {
				originAngle = parseInt(originAngle, 10)
			} else {
				originAngle = 0
			}
			spin.style.transform = `rotate(${originAngle + 360}deg)`

			let newPage = (page < totalPage) ? page + 1 : 1
			dispatch(actionCreators.changePage(newPage))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

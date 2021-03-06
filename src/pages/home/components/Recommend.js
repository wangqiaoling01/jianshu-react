import React, { Component } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';
import { connect } from 'react-redux';
class Recommend extends Component {
	render() {
		const { list } = this.props;
		return (
			<RecommendWrapper>
				{list.map(item => {
					return <RecommendItem key={item.id} imgUrl={item.imgUrl}></RecommendItem>;
				})}
			</RecommendWrapper>
		);
	}
}
const mapState = state => ({
	list: state.getIn(['home', 'recommendList']),
});
export default connect(mapState, null)(Recommend);

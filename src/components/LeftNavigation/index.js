require('./LeftNavigation.scss');
import React from 'react';
import cx from 'className';
let left_100NYU = '../../images/left/100_NYU.png';
let left_All = '../../images/left/All.png';
let left_List = '../../images/left/List.png';
let left_Trending = '../../images/left/Trending.png';
let left_NYU = '../../images/left/NYU.png';

class LeftNavigation extends React.Component{
	componentWillMount(){
		this.setState({
			extended: true
		});
	}
	handleExtend(){
		let current = this.state.extended;
		this.setState({
			extended: !current
		})
	}
	render(){
		return(
			<div className='LeftNavigation' style={this.props.style}>
				<div className='btnGroup'>
					<div className='btnContainer'>
						<img className='btn' src={left_100NYU} onClick={()=>this.handleExtend()}/>
					</div>
					
					{this.state.extended &&
						<div>
							<div className='btnContainer'>
								<img className={cx('btn','extend')} src={left_All} />
							</div>
							<div className='btnContainer'>
								<img className={cx('btn','extend')} src={left_List} />
							</div>
							<div className='btnContainer'>
								<img className={cx('btn','extend')} src={left_Trending} />
							</div>
							<div className='btnContainer'>
								<img className={cx('btn','extend')} src={left_NYU} />
							</div>
						</div>}
				</div>
			</div>
		)
	}
}
export default LeftNavigation;

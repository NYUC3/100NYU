require('./EventView.scss');
import React from 'react';
import cx from 'className';

let event = '../../images/event/event.png'
let emojis = ['../../images/emoji/music.png', '../../images/emoji/night.png', '../../images/emoji/outdoor.png']
let users = ['../../images/icon/user1.png', '../../images/icon/user2.png', '../../images/icon/user3.png', '../../images/icon/user4.png', '../../images/icon/user5.png', '../../images/icon/user6.png', '../../images/icon/user7.png', '../../images/icon/user8.png', '../../images/icon/user9.png']
class EventView extends React.Component{
	render(){
		let style = this.props.style;
		let layout = {
			'EventDetail': {
				height: style.height,
				width: style.width-style.marginLeft,
				marginTop: 20,
				marginBottom: 10
			},
			'EventPreview': {
				height: (style.width-style.marginLeft*4)/3+80,
				width: (style.width-style.marginLeft)*0.25
			},
			'EventWords': {
				height: (style.width-style.marginLeft*4)/3+80,
				width: (style.width-style.marginLeft*4)*0.75
			},
			'Follower': {
				width: style.width-style.marginLeft,
				height: 100,
				marginTop: 20
			}
		}
		return(
			<div className='EventViewContainer' style={style}>
				<div className={cx('EventDetail', 'frame')} style={layout.EventDetail}>
					<div className={cx('EventPreview', 'frame')} style={layout.EventPreview}>
						<img src={event} width={layout.EventPreview.width}/>
						<text className='EventRank'>#20</text>
						<text className='EventGo'>6.4k going</text>
						<text className='EventView'>20k Viewed</text>
						<div className='EmojiGroup'>
							{emojis.map((emoji, index)=>{return(<img className='emoji' key={index} src={emoji} />)})}
						</div>
						<div className='Vote'>
							<div>
								<i className={cx('fa','fa-caret-up', 'fa-caret', 'fa-2x')} onClick={()=>{return true}}></i>
							</div>
							<div className='VoteHotness'>
								100
							</div>
							<div>
								<i className={cx('fa','fa-caret-down', 'fa-caret', 'fa-2x')} onClick={()=>{return true}}></i>
							</div>
						</div>
					</div>
					<div className='EventWords' style={layout.EventWords}>
						<div className='title'>
							An Outdoor Concert in Central Park!
						</div>
						<div className='contentGroup'>
							<div className='content'>Come and join us for an outdoor concert in Centeral Park for great music and meet interesting people! Events are usually free.</div>
							<br />
							<div className='content'>Tips: Do not bring your backpack, so you may get an express access!</div>
						</div>
						<hr className='horizentalLine'/>
						<div className='TimePlace'>
							<div className='Time'>
								<img src='../../images/icon/calendar.png' />
								<span> Next Event: Saturday, July 23 at 1 PM </span>
							</div>
							<div className='Location'>
								<img src='../../images/icon/location.png' />
								<span > Location: Central Park </span>
							</div>
						</div>
						<hr className='horizentalLine'/>
						<div className='Activity'>
							<img className="activity" key="Check" src='../../images/icon/Check.png'/>
							<img className="activity" key="Love" src='../../images/icon/Love.png'/>
							<img className="activity" key="Share" src='../../images/icon/Share.png'/>
						</div>
					</div>
				</div>
				<div className={cx('Follower', 'frame')} style={layout.Follower}>
					<a className="Name">Kathy Mason</a> and others are also going!
					<div className="FollowerUsers">
						<i className={cx('fa', 'fa-chevron-left', 'fa-2x')} />
						{users.map((user, index)=>{return(<img src={user} key={index} className={'User'} />)})}
						<i className={cx('fa', 'fa-chevron-right', 'fa-2x')} />
					</div>
				</div>
			</div>
		)
	}
	handleScroll() {
    this.setState({
      height: 10
    });
  }
}

export default EventView;

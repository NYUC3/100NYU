require('./EventView.scss');
import React, {Component} from 'react';
import cx from 'className';
import AuthStore from '../../stores/AuthStore'
import UserActions from '../../actions/UserActions'
import { browserHistory } from 'react-router';

let eventUrl = 'http://localhost:1337/api/events/';
let event = '../../images/eventCover/event.png'
let emojis = ['../../images/emoji/music.png', '../../images/emoji/night.png', '../../images/emoji/outdoor.png']

class EventView extends Component{
	constructor(){
		super();
		this.state={
			detail: {},
			userId: AuthStore.getUserId(),
			authenticated: AuthStore.isAuthenticated()
		}
		this.goToEvent = this.goToEvent.bind(this);
		this.saveEvent = this.saveEvent.bind(this);
		this.shareEvent = this.shareEvent.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	componentWillMount(){
		const _this = this;
	    fetch(`${eventUrl}${this.props.id}`,{
	      method: 'GET',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      mode: 'cors'
	    }).then(function(response) {
	      return response.json();
	    }).then(function(j) {
	      _this.setState({
	        detail: j
	      })
	    });

	    AuthStore.addChangeListener(this.onChange);
	}

	componentWillUnmount(){
		AuthStore.removeChangeListener(this.onChange);
	}

	onChange(){
		this.setState({
			authenticated: AuthStore.isAuthenticated(),
			userId: AuthStore.getUserId()
		})
	}

	goToEvent(){
		if(this.state.authenticated) UserActions.goToEvent(this.state.userId,this.props.id);
		else browserHistory.push('/login');
	}

	saveEvent(){
		if(this.state.authenticated) UserActions.saveEvent(this.state.userId, this.props.id);
		else browserHistory.push('/login');
	}

	shareEvent(){

	}

	render(){
		let style = this.props.style;
		let {detail} = this.state;
		detail.photo = detail.photo == undefined ? '../../images/eventCover/event.png' : '../../images/eventCover/'+ detail.photo
		let layout = {
			'EventDetail': {
				height: style.fullHeight-180,
				width: style.width,
				marginTop: 20,
				marginBottom: 10
			},
			'EventPreview': {
				height: style.fullHeight-200,
				width: style.width*0.25
			},
			'EventWords': {
				height: (style.width-style.marginLeft*4)/3+80,
				width: style.width-style.marginLeft*4
			},
			'Follower': {
				width: style.width,
				height: 100,
				marginTop: 20,
				marginBottom: 20
			}
		}
		return(
			<div className='EventViewContainer' style={style}>
				<div className={cx('EventDetail', 'frame')} style={layout.EventDetail}>
					<div className={cx('EventPreview', 'frame')} style={layout.EventPreview}>
						<img src={detail.photo} width={layout.EventPreview.width}/>
						<text className='EventRank'>#{detail.ranking+1}</text>
						<text className='EventGo'>{detail.numberGoing} going</text>
						<text className='EventView'>{detail.numberViewed} Viewed</text>
						<div className='EmojiGroup'>
							{emojis.map((emoji, index)=>{return(<img className='emoji' key={index} src={emoji} />)})}
						</div>
						<div className='Vote'>
							<div>
								<i className={cx('fa','fa-caret-up', 'fa-caret', 'fa-2x')} onClick={()=>{return true}}></i>
							</div>
							<div className='VoteHotness'>
								{detail.upvotes}
							</div>
							<div>
								<i className={cx('fa','fa-caret-down', 'fa-caret', 'fa-2x')} onClick={()=>{return true}}></i>
							</div>
						</div>
					</div>
					<div className='EventWords' style={layout.EventWords}>
						<div className='title'>
							{detail.title}
						</div>
						<div className='contentGroup'>
							<div className='content'>{detail.description}</div>
							<br />
							<div className='content'>Tips: {(detail.tips=='')?'--':detail.tips}</div>
						</div>
						
						<div className='TimePlace'>
							<hr className='horizentalLine'/>
							<div className='Time'>
								<img width={20} height={20} src='../../images/Calendar.png' />
								<span> Next Event: --</span>
							</div>
							<div className='Location'>
								<img width={20} height={20} src='../../images/Location.png' />
								<span > Location: {detail.location} </span>
							</div>
							<hr className='horizentalLine'/>
						</div>
						
						<div className='Activity'>
							<img className="activity" key="Check" src='../../images/Check.png' onClick={this.goToEvent}/>
							<img className="activity" key="Love" src='../../images/Love.png' onClick={this.saveEvent}/>
							<img className="activity" key="Share" src='../../images/Share.png' onClick={this.shareEvent}/>
						</div>
					</div>
				</div>
				<div className={cx('Follower', 'frame')} style={layout.Follower}>
					<a className="Name">Kathy Mason</a> and others are also going!
					<div className="FollowerUsers">
						<i className={cx('fa', 'fa-chevron-left', 'fa-2x')} />
						{Array.from(Array(10).keys()).map((index)=>{return(<img src={'../../images/Profile.png'} key={index} className={'User'} />)})}
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

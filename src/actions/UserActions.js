// import AppDispatcher from '../dispatcher/AppDispatcher';
import UserAPI from '../utils/UserAPI';

export default {
	goToEvent: (userId, eventId) => {
		UserAPI.
		goToEvent(userId, eventId)
		.then(() => {
			console.log('saved');
		})
		.catch(message => {
			console.log(message);
		})
	},
	saveEvent: (userId, eventId) => {
		UserAPI.
		saveEvent(userId, eventId)
		.then(() => {
			console.log('saved');
		})
		.catch(message => {
			console.log(message);
		})

	},
	getUserInfo: (userId) => {
		UserAPI.
		getUserInfo(userId)
		.then(user => {
			console.log('user');
			AppDispatcher.dispatch({
				actionType: getInfo
			})
		})
		.catch(message => {
			console.log(message);
		})
	}
}
import AppDispatcher from '../dispatcher/AppDispatcher';
import UserAPI from '../utils/UserAPI';

export default {
	saveEvent: (userId, eventId) => {
		UserAPI.
		saveEvent(userId, eventId)
		.then(() => {
			console.log("saved");
		})
		.catch(message => {
			console.log(message);
		})

	},
	goToEvent: (userId, eventId) => {
		UserAPI.
		goToEvent(userId, eventId)
		.then(() => {
			console.log("saved");
		})
		.catch(message => {
			console.log(message);
		})
	}
}
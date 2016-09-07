import request from 'superagent/lib/client';
const userAPIUrl = 'http://localhost:1337/api/users/';

export default {
	goToEvent: (userId, eventId) => {
		return new Promise((resolve, reject) => {
			request
			.post(userAPIUrl + userId + '/go')
			.send({_id: eventId})
			.end((err, response) => {
				if(err) reject(err);
				resolve();
			})
		})
	},
	saveEvent: (userId, eventId) => {
		return new Promise((resolve, reject) => {
			request
			.post(userAPIUrl + userId + '/save')
			.send({_id: eventId})
			.end((err, response) => {
				if(err) reject(err);
				resolve();
			})
		})
	},
	getUserInfo: (userId) => {
		return new Promise((resolve, reject) => {
			request
			.get(userAPIUrl + userId)
			.end((err, response) => {
				if(err) reject(err);
				resolve(JSON.parse(response.text))
			})
		})
	}
}
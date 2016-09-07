import request from 'superagent/lib/client';

export default {
	goToEvent: (userId, eventId) => {
		return new Promise((resolve, reject) => {
			request
			.post('http://localhost:1337/api/users/' + userId + '/go')
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
			.post('http://localhost:1337/api/users/' + userId + '/save')
			.send({_id: eventId})
			.end((err, response) => {
				if(err) reject(err);
				resolve();
			})
		})
	}
}
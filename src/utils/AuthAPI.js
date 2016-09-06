import request from 'superagent/lib/client';

export default {
	UserLogin: (email, password) => {
		return new Promise((resolve, reject) => {
			request
			.post("http://localhost:1337/login")
			.send({email: email, password: password})
			.end((err, response) => {
				if(err) reject(err);
				resolve(JSON.parse(response.text));
			})
		});
	},
	UserLogout: () => {
	    return new Promise((resolve, reject) => {
	      request
	        .get("http://localhost:1337/logout")
	        .end((err, response) => {
	          if (err) reject(err);
	          resolve();
	        })
	    });		
	},
	UserSignup: (email, password) => {
		return new Promise((resolve, reject) => {
			request
			.post("http://localhost:1337/api/users")
			.send({email: email, password: password})
			.end((err, response) => {
				if(err) reject(err);
				resolve(JSON.parse(response.text));
			})
		})
	}
}
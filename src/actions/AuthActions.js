import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';
import AuthAPI from '../utils/AuthAPI';

export default {
	logUserIn:(email, password) => {
		AuthAPI
		.UserLogin(email, password)
		.then(user => {
			AppDispatcher.dispatch({
				actionType: AuthConstants.LOGIN_USER,
				userId: user._id,
				first: user.first,
				last: user.last
			});
		})
		.catch(message => {
			AppDispatcher.dispatch({
				actionTypes: AuthConstants.LOGIN_USER_ERROR
				message: message
			})
		})
	}

	logUserOut: () => {
		AuthAPI
		.UserLogout()
		.then(() => {
			AppDispatcher.dispatch({
				actionType: AuthConstants.LOGOUT_USER
			});		
		})
	}
}
import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthConstants from '../constants/AuthConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class AuthStoreClass extends EventEmitter {
	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}

	isAuthenticated(){
		if(localStorage.getItem('userId')){
			return true;
		}
		return false;
	}

	getUserId(){
		return localStorage.getItem('userId');
	}
}

const AuthStore = new AuthStoreClass();

function setUser(userId, first, last){
	if(!localStorage.getItem('userId')){
		localStorage.setItem('userId', userId);
		localStorage.setItem('first', first);
		localStorage.setItem('last', last);
	}
}

function removeUser(){
	localStorage.removeItem('userId');
	localStorage.removeItem('first');
	localStorage.removeItem('last');
}

AuthStore.dispatchUserinfo = AppDispatcher.register(action => {
	switch(action.actionType){
		case AuthConstants.LOGIN_USER:
			setUser(action.userId, action.first, action.last);
			AuthStore.emitChange();
			break

		case AuthConstants.LOGOUT_USER:
			removeUser();
			AuthStore.emitChange();
			break
	}
})

export default AuthStore;







import auth0 from 'auth0-js';
import EventEmitter from 'events';
import authConfig from '@/../auth_config.json';

import store from '@/store/store.js';

const localStorageKey = 'loggedIn';

const tokenExpiryKey = 'tokenExpiry';
const loginEvent = 'loginEvent';

const webAuth = new auth0.WebAuth({
  domain: authConfig.domain,
  redirectUri: window.location.origin + process.env.BASE_URL + 'callback',
  clientID: authConfig.clientId,
  responseType: 'id_token',
  scope: 'openid profile email'
});

class AuthService extends EventEmitter {
  idToken = null;
  profile = null;
  tokenExpiry = null;

  login(customState) {}

  handleAuthentication() {}

  localLogin(authResult) {}

  renewTokens() {}

  logOut() {
    localStorage.removeItem(localStorageKey);
    localStorage.removeItem(tokenExpiryKey);
    localStorage.removeItem('userInfo');

    this.idToken = null;
    this.tokenExpiry = null;
    this.profile = null;

    webAuth.logout({
      returnTo: window.location.origin + process.env.BASE_URL
    });

    this.emit(loginEvent, { loggedIn: false });
  }

  isAuthenticated() {}
}

export default new AuthService();

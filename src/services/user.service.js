import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/users/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'login',{withCredentials: true});
  }

  getUserBoard() {
    return axios.get(API_URL + 'profile', { headers: authHeader() },{withCredentials: true});
  }

  
}

export default new UserService();
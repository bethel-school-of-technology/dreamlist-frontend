import axios from "axios";

const API_URL = "http://localhost:8080";

class AuthService {
  login(Username, Password) {
    return axios
      .post(API_URL + "/users/login", {
        Username,
        Password
      })
      .then(response => {
        console.log('response', response)
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data.jwt));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(Username, FirstName, LastName, Email, Password) {
    return axios.post(API_URL + "/users/signup", {
      Username,
      FirstName,
      LastName,
      Email,
      Password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
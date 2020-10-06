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
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
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
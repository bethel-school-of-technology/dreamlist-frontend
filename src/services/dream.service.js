// import http from "../http-common";

import axios from "axios";

const API_URL = "http://localhost:8080";

class DreamDataService {
  getAll(DreamTitle, DreamBody) {
    return axios.get(API_URL + "/dreams", {
      DreamTitle,
      DreamBody
    });
  }

  // get(id) {
  //   return http.get(`/dreams/${id}`);
  // }

  create(DreamTitle, DreamBody) {
    return axios.post(API_URL + "/dreams/add", {
      DreamTitle,
      DreamBody
    });
  }

 

  // update(id, data) {
  //   return http.put(`/dreams/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/dreams/${id}`);
  // }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new DreamDataService();
import http from "../http-common";

import axios from "axios";

const API_URL = "http://localhost:8080";

class DreamDataService {
  getAll(DreamTitle, DreamBody) {
    return axios.get(API_URL + "/dreams", {
      DreamTitle,
      DreamBody
    },{withCredentials: true});
  }

  // get(id) {
  //   return http.get(`/dreams/${id}`);
  // }

// <<<<<<< homePage
//   create(data) {
//     return http.post("/dreams", data);
//   }

//   update(id, data) {
//     return http.put(`/dreams/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/dreams/${id}`);
//   }
// =======
  create(DreamTitle, DreamBody) {
    return axios.post(API_URL + "/dreams/add", {
      DreamTitle,
      DreamBody
    },{withCredentials: true});
  }

 

  // update(id, data) {
  //   return http.put(`/dreams/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/dreams/${id}`);
  // }
// >>>>>>> dev

deleteAll() {
    return http.delete(`/dreams`);
  }

  findByTitle(title) {
    return http.get(`/dreams?title=${title}`);
  }}


export default new DreamDataService();
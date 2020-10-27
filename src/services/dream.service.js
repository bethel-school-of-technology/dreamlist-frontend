import http from "../http-common";

class DreamDataService {
  getAll() {
    return http.get("/dreams");
  }

  get(id) {
    return http.get(`/dreams/${id}`);
  }

  create(data) {
    return http.post("/dreams/add", data);
  }

  update(id, data) {
    return http.put(`/dreamss/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dreamss/${id}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new DreamDataService();
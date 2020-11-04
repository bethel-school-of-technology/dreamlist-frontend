import http from "../http-common";

class DreamDataService {
  getAll() {
    return http.get("/dreams");
  }

  get(id) {
    return http.get(`/dreams/${id}`);
  }

  create(data) {
    return http.post("/dreams", data);
  }

  update(id, data) {
    return http.put(`/dreams/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dreams/${id}`);
  }

  deleteAll() {
    return http.delete(`/dreams`);
  }

  findByTitle(title) {
    return http.get(`/dreams?title=${title}`);
  }
}

export default new DreamDataService();
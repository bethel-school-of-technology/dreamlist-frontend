import React, { Component } from "react";
import DreamDataService from "../services/dream.service";
import { Link } from "react-router-dom";

export default class DreamsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveDreams = this.retrieveDreams.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDream = this.setActiveDream.bind(this);
    this.removeAllDreams = this.removeAllDreams.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      dreams: [],
      currentDream: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveDreams();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveDreams() {
    DreamDataService.getAll()
      .then(response => {
        this.setState({
          dreams: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDreams();
    this.setState({
      currentDream: null,
      currentIndex: -1
    });
  }

  setActiveDream(dream, index) {
    this.setState({
      currentDream: dream,
      currentIndex: index
    });
  }

  removeAllDreams() {
    DreamDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    DreamDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          dreams: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, dreams, currentDream, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Dream List</h4>

          <ul className="list-group">
            {dreams &&
              dreams.map((dream, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDream(dream, index)}
                  key={index}
                >
                  {dream.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllDreams}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentDream ? (
            <div>
              <h4>Dream</h4>
              <div>
                <label>
                  <strong>Dream Title:</strong>
                </label>{" "}
                {currentDream.title}
              </div>
              <div>
                <label>
                  <strong>Dream:</strong>
                </label>{" "}
                {currentDream.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentDream.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/dreams/" + currentDream.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Select Dream...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

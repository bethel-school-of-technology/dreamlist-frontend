import React, { Component } from "react";
import DreamDataService from "../services/dream.service";

export default class Dream extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getDream = this.getDream.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateDream = this.updateDream.bind(this);
    this.deleteDream = this.deleteDream.bind(this);

    this.state = {
      currentDream: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDream(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDream: {
          ...prevState.currentDream,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentDream: {
        ...prevState.currentDream,
        description: description
      }
    }));
  }

  getDream(id) {
    DreamDataService.get(id)
      .then(response => {
        this.setState({
          currentDream: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDream.id,
      title: this.state.currentDream.title,
      description: this.state.currentDream.description,
      published: status
    };

    DreamDataService.update(this.state.currentDream.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentDream: {
            ...prevState.currentDream,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDream() {
    DreamDataService.update(
      this.state.currentDream.id,
      this.state.currentDream
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The dream was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteDream() {    
    DreamDataService.delete(this.state.currentDream.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/dreams')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentDream } = this.state;

    return (
      <div>
        {currentDream ? (
          <div className="edit-form">
            <h4>Dream</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Dream Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentDream.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Dream</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentDream.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentDream.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentDream.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteDream}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateDream}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Dream...</p>
          </div>
        )}
      </div>
    );
  }
}


import React, { Component } from "react";
import DreamDataService from "../services/dream.service";

export default class AddDream extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveDream = this.saveDream.bind(this);
    this.newDream = this.newDream.bind(this);

    this.state = {
      DreamTitle: "",
      DreamBody: ""
    //   published: false,

    //   submitted: false
    };
   
  }

  onChangeTitle(e) {
    this.setState({
      DreamTitle: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      DreamBody: e.target.value
    });
  }

  saveDream() {
    var data = {
      DreamTitle: this.state.DreamTitle,
      DreamBody: this.state.DreamBody
    };

    DreamDataService.create(data)
      .then(response => {
        this.setState({

          DreamTitle: response.data.DreamTitle,
          DreamBody: response.data.DreamBody
          

        //   submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
        
  }

  newDream() {
    this.setState({

        
      DreamTitle: "",
      DreamBody: ""
    //   published: false,

    //   submitted: false
    });
    
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newDream}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Dream Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.DreamTitle}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Write Dream</label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                rows="10"
                required
                value={this.state.DreamBody}
                onChange={this.onChangeDescription}
                name="description">
                </textarea>
            </div>

            <button onClick={this.saveDream} className="btn btn-success">
              Save Dream
            </button>
          </div>
        )}
      </div>
    );
  }
}


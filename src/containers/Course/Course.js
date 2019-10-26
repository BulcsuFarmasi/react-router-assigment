import React, { Component } from "react";

class Course extends Component {
  state = {
    title: null
  };

  componentDidMount() {
    const title = this.getTitle();
    this.setTitle(title);
  }

  componentDidUpdate() {
    const title = this.getTitle();
    if (title !== this.state.title) {
      this.setTitle(title);
    }
  }

  getTitle = () => {
    const search = new URLSearchParams(this.props.location.search);
    return search.get("title");
  };

  setTitle = title => {
    this.setState({ title });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;

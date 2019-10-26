import React, { Component } from "react";

class Course extends Component {
  state = {
    title: null
  };

  componentDidMount() {
    console.log(this.props);
    const search = new URLSearchParams(this.props.location.search);
    this.setState({ title: search.get("title") });
  }

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

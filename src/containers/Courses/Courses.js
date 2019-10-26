import React, { Component } from "react";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" }
    ]
  };

  navigateHandler = (id, title) => {
    const search = new URLSearchParams();
    search.set("title", title);
    this.props.history.push({
      pathname: "/course/" + id,
      search: search.toString()
    });
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <article
                className="Course"
                key={course.id}
                onClick={() => this.navigateHandler(course.id, course.title)}
              >
                {course.title}
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Courses;

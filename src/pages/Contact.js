import React, { Component } from "react";

class Contact extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.message) {
      console.log("Fill out your first and last name please!");
    } else {
      console.log(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
        <h2>Contact Me</h2>
        <form className="form" action="mailto: benedicta.kim@gmail.com" method="post" enctype="text/plain">
          <input 
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input 
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input 
            value={this.state.password}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          <textarea className="materialize-textarea"
            value={this.state.password}
            name="message"
            onChange={this.handleInputChange}
            type="message"
            placeholder="Message"
          />
          <button onClick={this.handleFormSubmit} button className="btn waves-effect waves-light">Submit</button>
        </form>
        <br></br>
      </div>
    );
  }
}

export default Contact
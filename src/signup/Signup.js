import React from "react";
import "bulma/css/bulma.css";

import FormField from "../formfield/FormField";
import CoolButton from "../coolbutton/CoolButton";
import Message from "../message/Message";

class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    newsletter: false,
    campus: "",
  };

  handleChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    console.log(this.state);
  };

  render() {
    // Input controlado

    // Input não-controlado

    return (
      <form>
        <FormField
          label="Name"
          type="text"
          placeholder="e.g Alex Smith"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
          onChange={this.handleChange}
          value={this.state.email}
          name="email"
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <div>
          <label>I want to join the newsletter</label>
          <input
            type="checkbox"
            name="newsletter"
            onChange={(event) => {
              this.setState({ newsletter: event.currentTarget.checked });
              console.log(this.state.newsletter);
            }}
            checked={this.state.newsletter}
          />
        </div>

        <div>
          <label>Select your Campus</label>
          <label>São Paulo</label>
          <input
            type="radio"
            name="campus"
            onChange={this.handleChange}
            value="São Paulo"
          />
          <label>Miami</label>
          <input
            type="radio"
            name="campus"
            onChange={this.handleChange}
            value="Miami"
          />
          <label>Barcelona</label>
          <input
            type="radio"
            name="campus"
            onChange={this.handleChange}
            value="Barcelona"
          />
        </div>

        <CoolButton isPrimary className="is-rounded my-class">
          Submit
        </CoolButton>
        <Message isInfo title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>.
        </Message>
      </form>
    );
  }
}

export default Signup;

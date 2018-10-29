import React from "react";

class LoginForm extends React.Component {

  onSubmit = event => {
    event.preventDefault()
    this.onSubmit(this.state)
  }

  constructor() {
    super();

    this.state = {username:'',password:''};
  }

  handleInputChanges = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
             name="password"
             type="password"
             value={this.state.username}
             onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

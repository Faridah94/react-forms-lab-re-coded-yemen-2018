import React from "react";

class LoginForm extends React.Component {

  onSubmit = event => {
    event.preventDefault()
    this.onSubmit(this.state)
  }


  handleInputChanges = event => {
    this.setState({
       [event.target.username]: event.target.value;
        [event.target.password]: event.target.value;
    });
  }

  constructor() {
    super();

    this.state = {username:'',password:''};
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
             value={this.state.password}
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


import React from "react";

export default class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars-this.state.value.length}

        <input
          type="text"
          value={this.state.value}
          onChange={event =>this.handleChange(event)}
        />
      </div>
    );
  }
}

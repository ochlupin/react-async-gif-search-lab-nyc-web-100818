import React from "react";

export default class GifSearch extends React.Component {
  state = {
    query: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    // fetchGIFS is a callback function that is passed down from GifListContainer to GifSearch as a prop
    // this.state.query will be passed into fetchGIFS as an argument
    // this.state.query in turn reflects whatever the input field value is => because its a controlled form
    this.props.fetchGIFS(this.state.query);
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

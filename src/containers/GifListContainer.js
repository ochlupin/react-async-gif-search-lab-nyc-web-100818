import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

// GifListContainer Component is responsible for:
// 1) Fetching data from API
// 2) Storing the first 3 GIFs from the API in its this.state.
// 3) Passing that data down to it's child <GifList> as a prop
// 4) Render <GifSearch> component that renders the form
// 5) Pass down a submit handler function to <GifSearch>

export default class GifListContainer extends React.Component {
  state = {
    gifs: []
  };

  fetchGIFS = (query = "doge") => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(response => response.json())
      .then(gifData => {
        console.log(gifData.data);
        const gifs = gifData.data.map(d => d.images.original.url).slice(0, 3);
        // limit to first 3 entries in the response
        this.setState({
          gifs: gifs
        });
      });
  };

  componentDidMount() {
    this.fetchGIFS();
  }

  render() {
    return (
      <div>
        <GifSearch fetchGIFS={this.fetchGIFS} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

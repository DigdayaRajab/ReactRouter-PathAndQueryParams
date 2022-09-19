import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { searchMovies } from "../utils/data";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundedMovies: [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundedMovies: searchMovies(keyword),
      };
    });
  }

  render() {
    return (
      <section>
        <h2>Search Moive</h2>
        {/* send function as props class */}
        <SearchBar search={this.onSearch} />
        {/* send  array to movieList*/}
        <MovieList movies={this.state.foundedMovies} />
      </section>
    );
  }
}

export default SearchPage;

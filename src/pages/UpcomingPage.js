import React from "react";
import MoiveList from "../components/MovieList";
import { getUpcomingMovies } from "../utils/data";

class UpcomingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      upcomingMovies: getUpcomingMovies(),
    };
  }

  render() {
    return (
      <section>
        <h2>Upcoming Movies</h2>
        <MoiveList movies={this.state.upcomingMovies} />
      </section>
    );
  }
}

export default UpcomingPage;

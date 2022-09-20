import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { searchMovies } from "../utils/data";
import { useSearchParams } from "react-router-dom"; //Query search params

/**
 * buat komponen wrapper bernama SearchPageWrapper dan panggil fungsinya di dalam komponen
 */
function SearchPageWrapper() {
  const [searchParams, setSearchParmans] = useSearchParams();
  // console.log(searchParams[0]);

  // sinkronisasi search parameter di url dengan state di SearchBar 2
  const title = searchParams.get("title");

  //function SearchPageWrapper digunakan untuk mengubah search parameter di URL, fungsi ini akan dipanggil setiap kali method onSearch di komponen SearchPage tereksekusi
  function changeSearchParams(keyword) {
    setSearchParmans({ title: keyword });
  }

  //mengirimkan function changeSearchParams
  return <SearchPage onSearch={changeSearchParams} activeKeyword={title} />;
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // foundedMovies: [],
      //ternary operator 2
      foundedMovies: props.activeKeyword ? searchMovies(props.activeKeyword) : [],
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState(() => {
      return {
        foundedMovies: searchMovies(keyword),
      };
    });
    this.props.onSearch(keyword); //memanggil function changeSearchParams
  }

  render() {
    return (
      <section>
        <h2>Search Moive</h2>
        {/* send function as props class */}
        {/* <SearchBar search={this.onSearch} /> */}
        {/* berikan nilai tersebut pada komponen <SearchBar /> sebagai nilai props defaultKeyword 2 */}
        <SearchBar search={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        {/* send  array to movieList*/}
        <MovieList movies={this.state.foundedMovies} />
      </section>
    );
  }
}

// export default SearchPage;
export default SearchPageWrapper; //query search Params

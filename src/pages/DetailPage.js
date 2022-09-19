import React from "react";
import MovieDetail from "../components/MovieDetail";
import { getMovie } from "../utils/data";
import { useParams } from "react-router-dom"; //path detail

/**
 *  membuat functional component baru sebagai wrapper atau pembungkus dari <DetailPage />. Di dalam komponen wrapper inilah kita akan memanggil fungsi useParams() untuk mendapatkan path parameter :id dan langsung mengirimkannya ke komponen <DetailPage /> melalui props.
 */
function DetailPageWrapper() {
  // dapatkan nilai id dari path parameter menggunakan fungsi useParams()yang disediakan react-router-dom
  const { id } = useParams();
  //   kirim nilai tersebut sebagai props id untuk komponen <DetailPage />
  return <DetailPage id={Number(id)} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: getMovie(props.id),
    };
  }

  render() {
    if (this.state.movie === null) {
      return <p> Movie is not found </p>;
    }
    return (
      <section>
        <MovieDetail {...this.state.movie} />
      </section>
    );
  }
}

// export default DetailPage;
export default DetailPageWrapper;

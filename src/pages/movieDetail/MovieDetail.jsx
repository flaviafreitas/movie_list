import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../../api/movieService";
import './index.scss'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const formatCurrency = (value) => {
    if (value !== undefined) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      return 'Indisponível';
    }
  }

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movie);
  });

  return (
    <section className="MovieDetail">
      <div className="MovieDetail__container">
        <div className="MovieDetail__col">
          <h1 className="MovieDetail__title">{movie.title}</h1>
          <div className="MovieDetail__image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="MovieDetail__col">
          <div className="MovieDetail__details">
            <div className="MovieDetail__detail">
            <span>Orçamento:</span> {movie.budget !== 0 ? formatCurrency(movie.budget) : 'Indisponível'}
            </div>
            <div className="MovieDetail__detail">
              <span>Idioma de origem:</span> {movie.original_language}
            </div>
            <div className="MovieDetail__detail">
            <span>Popularidade:</span> {movie.popularity !== 0 ? movie.popularity : 'Indisponível'}
            </div>
            <div className="MovieDetail__detail">
              <span>Sinopse:</span> {movie.overview}
            </div>
          </div>
          <Link to={"/"} className="MovieDetail__button">
            Voltar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
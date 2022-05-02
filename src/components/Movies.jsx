import Movie from "./Movie"
import './Movies.css'
import MovieDetails from "./MovieDetails"

export default function Movies({listOfMovies, onClick, allMovies}) {

  // console.log(listOfMovies)


  return (
    < div className="movieContainer">
    {listOfMovies.length !== 1 ? listOfMovies.map(( movie, index) => {
      return <Movie 
        onClick={onClick}
        key={movie.id}
        description={movie.description}
        title={movie.title}
        time={movie.running_time}
        director={movie.director}
        date={movie.release_date}
        image = {movie.image}
        image2 = {movie.movie_banner}
        index={index}
      />
    }): listOfMovies.map(( movie, index) => {
      return <MovieDetails 
        allMovies = {allMovies}
        onClick={onClick}
        key={movie.id}
        description={movie.description}
        title={movie.title}
        time={movie.running_time}
        director={movie.director}
        date={movie.release_date}
        image = {movie.image}
        image2 = {movie.movie_banner}
        index={index} />
      })}
    </div>
  )
}
import { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Movies from "./components/Movies";
const axios = require("axios");


function App() {

  const [movies, setMovies] = useState([]);

useEffect(()=> {
  axios.get('https://ghibliapi.herokuapp.com/films/')
  .then(response => {
    setMovies(response.data)
  })
}, [])

  function onClick (id) {
    // let newMovie = movies.filter(movies[id])
    // console.log(newMovie)
    setMovies([movies[id]])
  }

  function allMovies() {
    
    axios.get('https://ghibliapi.herokuapp.com/films/')
    .then(response => {
      return response.data
    }).then(data=> {
      setMovies(data)
    })
  }

  function movieLookup(event) {
    let lookup = event.target.value
    // console.log(lookup)

    if (!lookup) {
      allMovies()
    } else {
      
      let searchArray = movies.filter(movie => {
        return movie.title.toLowerCase().includes(lookup.toLowerCase()) 
      })
  
      setMovies(searchArray)
    }
    
  }

  return (
    <div className="App">
      <SearchForm onChange={movieLookup}/>
      <Movies listOfMovies={movies} onClick={onClick} allMovies={allMovies}/>
    </div>
  );
}

export default App;

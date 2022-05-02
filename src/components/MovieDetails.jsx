import './MovieDetails.css'

export default function MovieDetails(props) {

  let {description, title, time, director, date, image, onClick, index, allMovies} = props
  return (
    <>
    <h5 onClick={()=>allMovies()}>Go Back</h5>
      <div className="movieDetails" onClick={()=>onClick(index)}>
      <img src={image} />
      <div className="movieContent"> 
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Director: {director}</p>
      <p>Release Year: {date}</p>
      <p>Running Time: {time} minutes</p>
      </div>
      </div>
    </>

  )
}
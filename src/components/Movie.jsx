import './Movie.css'

export default function Movie(props) {

  let {description, title, time, director, date, image2, onClick, index} = props
  return (
    <div className="movieCard" onClick={()=>onClick(index)}>
    <img src={image2} />
    <h3>{title}</h3>
    </div>

  )
}
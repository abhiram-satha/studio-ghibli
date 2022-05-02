import Studio from './pictures/1000px-Studio_Ghibli_Logo.svg_.png'
export default function NoMovies({allMovies}) {
  return (
    <>
      <h5 onClick={()=>allMovies()}>Go Back</h5>
      <h1 className="errorMessage">No Movie With That Name</h1>
      <img className="logo-picture"src={Studio} alt="Studio Ghibli Logo"/>
    </>
    
   
  )
}
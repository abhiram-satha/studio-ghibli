import NavPic from "./pictures/nav_bar.jpeg"

export default function SearchForm ({onChange}) {
  
  return (
    
    <nav className="navbar-container">
      <img src={NavPic} alt="studio ghibli logo" className="Navbar-pic"/>
    <div className={'input-group input-group-lg'}>
      <form>
        <input className={'form-control'} placeholder="Search..." name="movieSearch" type="text" onChange={(event)=>{onChange(event)}}></input>
      </form>
    </div>
    </nav>
  )
}
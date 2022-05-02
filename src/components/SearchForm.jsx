export default function SearchForm ({onChange}) {
  
  return (
    <div className={'input-group input-group-lg'}>
      <form>
        <input className={'form-control'} placeholder="Search..." name="movieSearch" type="text" onChange={(event)=>{onChange(event)}}></input>
      </form>
    </div>
  )
}
export default function Homepage({onChange}) {
  

  return (
    <div>
      <form>
        <input name="movieSearch" type="text" onChange={(event)=>{onChange(event)}}></input>
      </form>
    </div>
  )
}
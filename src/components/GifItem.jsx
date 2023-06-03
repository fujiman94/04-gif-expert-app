export const GifItem = ({id, title, url}) => {

  return (
    <div className="card-grid">
      <img src={url} alt={title}/>
      <p> {title} </p>
    </div>
  )
}






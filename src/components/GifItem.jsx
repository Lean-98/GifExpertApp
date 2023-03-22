

export const GifItem = ({ title, url, id }) => {

  return (
    <div className="container-card">
        <img className="container-card__img "  src={ url } alt={ title } />
        <div className="container-header container-card__text">{ title }</div>
    </div>
  )
}

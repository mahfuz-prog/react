export default function Entry(props) {
  return (
    <article>
      <div className="thum">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="info">
        <div className="location">
          <span>{props.country}</span>
          <a href={props.googleMapsLink}>View on google map</a>
        </div>
        <h1>{props.title}</h1>
        <span>{props.dates}</span>
        <p>{props.text}</p>
      </div>
    </article>
  )
}

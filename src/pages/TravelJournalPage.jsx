import data from "../data"

function Entry(props) {
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

export default function TravelJournalPage() {
  const entryElements = data.map((item) => {
    return <Entry key={item.id} {...item} />
  })

  return (
    <main className="page">
      <h1>Travel Journal</h1>
      <p className="page-intro">
        Mapping over data and passing props to child components.
      </p>
      {entryElements.length > 0 ? entryElements : <p>No entries found.</p>}
    </main>
  )
}

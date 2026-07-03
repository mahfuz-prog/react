import Entry from "../components/Entry"
import data from "../data"

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

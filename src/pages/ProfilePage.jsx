import { useState } from "react"

export default function Profile() {
  const [contact, setContact] = useState({
    profilePic: "./src/assets/react.svg",
    firstName: "John",
    lastName: "Kabir",
    phone: "+8801744345",
    email: "johnkabir@gmail.com",
    isFavorite: true,
  })

  function handleClick(e) {
    setContact((prev) => {
      return {
        ...prev,
        isFavorite: !prev.isFavorite,
      }
    })
  }

  return (
    <section className="profile">
      <img src={contact.profilePic} alt="" />
      <span onClick={handleClick}>{contact.isFavorite ? "⭐⭐" : "⭐"}</span>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <h5>{contact.phone}</h5>
      <p>{contact.email}</p>
    </section>
  )
}

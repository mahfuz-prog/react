import React, { useState } from "react"

import MemeHeader from "../components/meme_generator/MemeHeader"
import InputBox from "../components/meme_generator/InputBox"
import ImageBox from "../components/meme_generator/ImageBox"

export default function GenerateMeme() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgUrl: "https://i.imgflip.com/1bij.jpg",
  })
  const [allMemesUrl, setAllMemesUrl] = useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesUrl(data.data.memes))
  }, [])

  // connect state to input field, Controlled components
  function handleChange(e) {
    const { value, name } = e.currentTarget
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // select a random image
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemesUrl.length)
    const randomMemeUrl = allMemesUrl[randomNumber].url
    setMeme((prev) => ({ ...prev, imgUrl: randomMemeUrl }))
  }

  return (
    <section className="meme-generator">
      <MemeHeader />
      <InputBox
        handleChange={handleChange}
        meme={meme}
        getMemeImage={getMemeImage}
      />
      <ImageBox meme={meme} />
    </section>
  )
}

/*
functional programming
=========================================
same input -> same output, no contact with other for read or write


Controlled Component
=========================================
is a component where the form data (like what a user types into an input field)
is handled entirely by React state

<input 
type="text"
name="bottomText"
onChange={props.handleChange}  Bound to state
value={props.meme.bottomText}  Updates State
/>


use useEffect 
====================================================
(or side effects) only when your component needs to synchronize with something outside of the React ecosystem.

-> API Network Requests: Fetching data from a server when a page loads (like fetching your meme templates).
-> Subscribing to External Events: Setting up WebSockets, Firebase chat listeners, or global browser events (like tracking window.addEventListener('resize')).
-> Manual DOM Manipulations: Interacting with non-React third-party libraries (e.g., initializing a D3 chart, a Leaflet map, or a video player element).
-> Timers and Intervals: Setting up a setInterval or setTimeout that changes state down the line.
*/

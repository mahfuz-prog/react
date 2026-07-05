export default function InputBox(props) {
  return (
    <div className="meme-form">
      <div className="meme-input-text">
        <input
          type="text"
          name="topText"
          onChange={props.handleChange}
          value={props.meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          onChange={props.handleChange}
          value={props.meme.bottomText}
        />
      </div>
      <button onClick={props.getMemeImage}>Get a new meme image</button>
    </div>
  )
}

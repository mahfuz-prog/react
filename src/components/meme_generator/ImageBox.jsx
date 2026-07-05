export default function ImageBox(props) {
  return (
    <div className="meme-image-box">
      <span className="top">{props.meme.topText}</span>
      <img src={props.meme.imgUrl} alt="" />
      <span className="bottom">{props.meme.bottomText}</span>
    </div>
  )
}

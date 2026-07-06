export default function GetRecipe(props) {
  return (
    <div className="recipe" ref={props.ref}>
      <h3>Ready for a recipe?</h3>
      <span>generate a recipe from your list of ingredients.</span>
      <button onClick={props.getResponse}>Get a recipe</button>
      {props.loading && <p>Generating your custom recipe...</p>}
      {props.error && (
        <span style={{ fontSize: "12px", color: "red", marginTop: "5px" }}>
          Error: {props.error}
        </span>
      )}
    </div>
  )
}

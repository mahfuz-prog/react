export default function Form(props) {
  function handleSubmit(FormData) {
    const ingredient = FormData.get("ingredient")
    if (ingredient) {
      // get the prev array and update it with new element
      props.setIngredientList((prev) => [...prev, ingredient])
    } else {
      alert("Please enter something!")
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="text" placeholder="e.g oregano" name="ingredient" />
      <button>Add Ingredient</button>
    </form>
  )
}

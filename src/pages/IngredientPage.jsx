import { useState } from "react"

function Form(props) {
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const ingredient = formData.get("ingredient")
    if (ingredient) {
      // Note: if you ever need the old value of state
      // to help you determine the new value of state,
      // you should pass a callback function to your
      // state setter function instead of using
      // state directly. This callback function will
      // receive the old value of state as its parameter,
      // which you can then use to determine your new
      // value of state.
      // setterFunction((prev) => prev + 1)

      // get the prev array and update it with new element
      props.setIngredientList((prev) => [...prev, ingredient])
      e.target.reset()
    } else {
      alert("Please enter something!")
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="e.g oregano" name="ingredient" />
      <button>Add Ingredient</button>
    </form>
  )
}

function ShowIngredient(props) {
  return (
    <ul>
      {props.ingredientList.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

export default function AddIngredient() {
  const [ingredientList, setIngredientList] = useState([])
  return (
    <div>
      <Form setIngredientList={setIngredientList} />
      <ShowIngredient ingredientList={ingredientList} />
    </div>
  )
}

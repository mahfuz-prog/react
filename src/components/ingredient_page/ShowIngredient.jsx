export default function ShowIngredient(props) {
  return (
    <ul>
      {props.ingredientList.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  )
}

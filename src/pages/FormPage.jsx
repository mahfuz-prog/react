export default function Form() {
  function signUp(formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    console.log(name, email)
  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form action={signUp}>
        <label htmlFor="user-name">Your Name:</label>
        <input type="text" name="name" placeholder="Name" id="user-name" />
        <label htmlFor="user-email">Your Email:</label>
        <input type="email" name="email" placeholder="Email" id="user-email" />
        <button>Submit</button>
      </form>
    </section>
  )
}

import { useState } from "react"
import Form from "../components/ingredient_page/Form"
import ShowIngredient from "../components/ingredient_page/ShowIngredient"
import GetRecipe from "../components/ingredient_page/GetRecipe"
import ShowRecipe from "../components/ingredient_page/Recipe"
import Recipe from "../components/ingredient_page/Recipe"

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`
const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they
mention in your recipe. The recipe can include additional ingredients they didn't mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to
render to a web page`

export default function AddIngredient() {
  const [ingredientList, setIngredientList] = useState([])
  const [recipe, setRecipe] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRecipe = async () => {
    setLoading((prev) => true)
    setRecipe((prev) => "")
    setError((prev) => null)

    // check empty ingredient list
    if (ingredientList.length < 3) {
      // throw new Error("Empty ingredient list!")
      setError((prev) => "Empty ingredient list!")
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // systemInstruction is natively supported in the payload schema
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: [
            {
              parts: [
                {
                  text: `Here are my ingredients: ${ingredientList.join(", ")}`,
                },
              ],
            },
          ],
        }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(
          errorData.error?.message || `HTTP error! Status: ${res.status}`,
        )
      }

      const data = await res.json()
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text

      if (generatedText) {
        setRecipe(generatedText)
      } else {
        throw new Error("Could not parse recipe from response.")
      }
    } catch (err) {
      setError((prev) => err.message || "Failed to fetch recipe!")
    } finally {
      setLoading((prev) => false)
    }
  }

  return (
    <div style={{ width: "500px" }}>
      <Form setIngredientList={setIngredientList} />
      <ShowIngredient ingredientList={ingredientList} />
      <GetRecipe getResponse={fetchRecipe} error={error} loading={loading} />
      {recipe && !loading ? <ShowRecipe recipeMarkdown={recipe} /> : null}
    </div>
  )
}

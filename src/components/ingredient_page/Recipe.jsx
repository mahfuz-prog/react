import Markdown from "react-markdown"

export default function Recipe({ recipeMarkdown }) {
  return <Markdown>{recipeMarkdown}</Markdown>
}

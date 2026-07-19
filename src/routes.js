import HomePage from "./pages/HomePage"
import TravelJournalPage from "./pages/TravelJournalPage"
import IngredientPage from "./pages/IngredientPage"
import ProfilePage from "./pages/ProfilePage"
import FormPage from "./pages/FormPage"
import ConditonalPage from "./pages/ConditonalPage"
import ColorPalettePage from "./pages/ColorPalettePage"
import MemeGeneratorPage from "./pages/MemeGeneratorPage"
import TenziesPage from "./pages/TenziesPage"
import TutorialTenziesPage from "./pages/TutorialTenziesPage"
import EndgamePage from "./pages/EndgamePage"

export const routes = [
  {
    path: "/",
    label: "Home",
    element: HomePage,
  },
  {
    path: "/travel-journal",
    label: "Travel Journal",
    description: "Props, lists, and component composition",
    element: TravelJournalPage,
  },
  {
    path: "/ingredient",
    label: "Chef Claude",
    description: "State - Submit form and reflect form data",
    element: IngredientPage,
  },
  {
    path: "/profile",
    label: "Profile",
    description: "Complex state management",
    element: ProfilePage,
  },
  {
    path: "/contact",
    label: "Form Submission",
    description: "Form functionality",
    element: FormPage,
  },
  {
    path: "/conditional-rendering",
    label: "Conditional Rendering",
    description: "Conditional Rendering, Ternary operator",
    element: ConditonalPage,
  },
  {
    path: "/color-palette",
    label: "Color Palette",
    description: "Single source of truth. State, Props",
    element: ColorPalettePage,
  },
  {
    path: "/meme-generator",
    label: "Meme Generator",
    description: "Controlled components (forms), Functional programming in React, Fetching data, Side effects",
    element: MemeGeneratorPage
  },
  {
    path: "/tenzies",
    label: "Tenzies Game",
    description: "Roll until all dice are the same. Click to freeze a die. Click to roll the others.",
    element: TenziesPage
  },
  {
    path: "/tutorial-tenzies",
    label: "Tutorial Tenzies Game",
    description: "Following the tutorial.",
    element: TutorialTenziesPage
  },
  {
    path: "/endgame",
    label: "Assembly Endgame",
    description: "Simple game application.",
    element: EndgamePage
  },
]

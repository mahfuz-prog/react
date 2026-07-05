import HomePage from "./pages/HomePage"
import TravelJournalPage from "./pages/TravelJournalPage"
import IngredientPage from "./pages/IngredientPage"
import ProfilePage from "./pages/ProfilePage"
import FormPage from "./pages/FormPage"
import ConditonalPage from "./pages/ConditonalPage"
import ColorPalettePage from "./pages/ColorPalettePage"

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
]

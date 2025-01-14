import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import About from "./components/About/About"; 
import StartHere from "./components/StartHere/StartHere";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta pentru HomePage */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta pentru AllRecipes */}
          <Route path="/recipes" element={<RecipesPage />} />

          {/* Ruta pentru detaliile unei rețete */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* Ruta pentru pagina About */}
          <Route path="/about" element={<About />} />
          <Route path="/start" element={<StartHere />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componenta care transmite parametrii
const RecipesPage = () => {
  const [searchParams] = useSearchParams();
  const difficulty = searchParams.get("difficulty") || "";
  const cuisine = searchParams.get("cuisine") || "";

  return <AllRecipes difficulty={difficulty} cuisine={cuisine} />;
};

export default App;

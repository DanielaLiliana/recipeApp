import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

interface AllRecipesProps {
  difficulty: string;
  cuisine: string;
}

const AllRecipes: React.FC<AllRecipesProps> = ({ difficulty, cuisine }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        const filteredRecipes = data.recipes.filter((recipe: Recipe) => {
          if (difficulty) {
            return recipe.difficulty === difficulty;
          }
          if (cuisine) {
            return recipe.cuisine === cuisine;
          }
          return true;
        });

        setRecipes(filteredRecipes);
      } catch (error: any) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [difficulty, cuisine]);

  if (isLoading) {
    return <div>Loading recipes...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        {difficulty && cuisine
          ? `${difficulty} or ${cuisine} Recipes`
          : difficulty
          ? `${difficulty} Recipes`
          : cuisine
          ? `${cuisine} Recipes`
          : "All Recipes"}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <Link to={`/recipes/${recipe.id}`} key={recipe.id}> {/* corectat ruta */}
            <RecipeCard image={recipe.image} title={recipe.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;

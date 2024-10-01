"use client";
import { useEffect, useState } from "react";

type Recipe = {
  name: string;
  ingredients: string[];
  instructions: string[];
  category: string;
};

const RecipesList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Fetch recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("/data/recipes.json");
      const data = await response.json();
      setRecipes(data.recipes);
    };

    fetchRecipes();
  }, []);

  // Filter recipes by category
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);

  // Delete a recipe
  const handleDeleteRecipe = async (index: number) => {
    const response = await fetch(`/api/recipes?index=${index}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setRecipes((prevRecipes) => prevRecipes.filter((_, i) => i !== index));
    } else {
      console.error("Failed to delete the recipe");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">
          Filter by category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border rounded p-2"
        >
          <option value="All">All</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRecipes.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <p className="text-gray-600">{recipe.category}</p>
              <h3 className="text-lg font-semibold mt-2">Ingredients:</h3>
              <ul className="list-disc list-inside">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mt-2">Instructions:</h3>
              <ol className="list-decimal list-inside">
                {recipe.instructions.map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
              <button
                onClick={() => handleDeleteRecipe(index)}
                className="mt-4 bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesList;

"use client";
import { useState } from "react";

const AddRecipe: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [category, setCategory] = useState<string>("Breakfast");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newRecipe = {
      name,
      ingredients: ingredients.split("\n"),
      instructions: instructions.split("\n"),
      category,
    };

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        alert("Recipe added successfully!");
        window.location.reload();
      } else {
        alert("Failed to add recipe.");
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Failed to add recipe.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={5}
            required
          />
        </div>
        <div>
          <label
            htmlFor="instructions"
            className="block text-sm font-medium text-gray-700"
          >
            Instructions (one per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={5}
            required
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;

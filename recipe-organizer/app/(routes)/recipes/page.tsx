import RecipesList from "@/components/RecipesList";
import AddRecipe from "@/components/AddRecipe";

export default function RecipesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Organizer</h1>
      <AddRecipe />
      <RecipesList />
    </main>
  );
}

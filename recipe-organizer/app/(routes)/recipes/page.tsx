import RecipesList from "@/components/RecipesList";

// Recept Toevoegen:
// Een formulier waarin gebruikers nieuwe recepten kunnen invoeren, met de volgende velden:
// Gerechtnaam: De naam van het gerecht.
// Ingrediënten: Een veld om de ingrediënten in te voeren (bijv. "3 eieren, 200g bloem").
// Instructies: Stapsgewijze uitleg hoe het gerecht bereid moet worden.
// Categorie: Een dropdownmenu met opties zoals "Ontbijt", "Lunch", "Diner", of "Dessert".
// De ingevoerde recepten worden opgeslagen in de local storage van de browser, zodat ze ook na het herladen van de pagina bewaard blijven.

// Recepten Beheren:
// Gebruikers kunnen verwijderen.
// Er moet een "Verwijderen" knop zijn om recepten permanent te verwijderen.

export default function RecipesPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <RecipesList />
    </main>
  );
}

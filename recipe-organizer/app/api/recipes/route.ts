import fs from "fs";
import path from "path";

type Recipe = {
  name: string;
  ingredients: string[];
  instructions: string[];
  category: string;
};

type Data = {
  recipes: Recipe[];
};

export async function POST(req: Request): Promise<Response> {
  try {
    const newRecipe: Recipe = await req.json();

    const filePath = path.join(process.cwd(), "public", "data", "recipes.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data: Data = JSON.parse(fileContents);

    data.recipes.push(newRecipe);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    return new Response(
      JSON.stringify({ message: "Recipe added successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling POST request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

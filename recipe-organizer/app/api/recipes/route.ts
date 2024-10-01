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

export async function DELETE(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const index = parseInt(searchParams.get("index") || "", 10);

    if (isNaN(index)) {
      return new Response(JSON.stringify({ message: "Invalid index" }), {
        status: 400,
      });
    }

    const filePath = path.join(process.cwd(), "public", "data", "recipes.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data: Data = JSON.parse(fileContents);

    if (index < 0 || index >= data.recipes.length) {
      return new Response(JSON.stringify({ message: "Index out of bounds" }), {
        status: 400,
      });
    }

    data.recipes.splice(index, 1);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

    return new Response(
      JSON.stringify({ message: "Recipe deleted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling DELETE request:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

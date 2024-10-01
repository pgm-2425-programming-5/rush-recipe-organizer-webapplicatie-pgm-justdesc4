import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 max-w-screen-lg mx-auto ">
        <li>
          <Link href="/" className="text-white hover:text-gray-400 font-bold">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/recipes"
            className="text-white hover:text-gray-400 font-bold"
          >
            Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

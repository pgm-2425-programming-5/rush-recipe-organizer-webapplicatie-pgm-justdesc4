export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Recipe Organizer!
      </h1>
      <a
        href="/recipes"
        className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-700 transition-colors duration-300"
      >
        See recipes
      </a>
    </main>
  );
}

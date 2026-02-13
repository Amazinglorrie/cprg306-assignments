import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Shopping List
        </h1>
        <NewItem />
      </div>
    </main>
  );
}

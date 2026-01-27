import GroceryItemList from './GroceryItemList';

export default function Page() {
  return (
    <main className="bg-slate-900 min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Shopping List</h1>
        <GroceryItemList />
      </div>
    </main>
  );
}
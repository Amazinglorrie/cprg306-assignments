import ItemList from './item-list';

export default function Page() {
  return (
    <main className="min-h-screen dark:bg-gray-800 bg-gray-50 py-4 flex items-center justify center">
        <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}


export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="p-4 mb-4 bg-white border border-gray-300 rounded-lg">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm">Quantity: {quantity}</div>
      <div className="text-sm">Category: {category}</div>
    </li>
  );
}
export default function Item({ name, quantity, category }) {
    return (
        <li className="p-2 m-4 bg-white max-w-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">{name}</h2>
            <div className="text-sm text-gray-600">
                Buy {quantity} in {category}
            </div>
        </li>
    );
}
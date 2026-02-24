

const category = {
  Bakery: "🍞",
  Dairy: "🥛",
  Produce: "🍌",
  Meat: "🍗",
  Pantry: "🫙",
  Frozen: "🧊",
  Beverages: "🧃",
  Snacks: "🍿",
  Household: "🪣",
  "Canned Goods": "🍅",
  "Dry Goods": "🍝",
  Other: "🛒",
};

export default function Item({ name, quantity, category }) {
  const cat = category[category] ;
  return (
    <li className="item-card">
      <p className="item-name">
        {name} {cat}
      </p>
      <p className="item-detail">Quantity: {quantity}</p>
      <p className="item-detail">Category: {category}</p>
    </li>
  );
}
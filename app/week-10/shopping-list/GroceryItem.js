const CATEGORY = {
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

export default function Item({ name, quantity, category, onSelect }) {
  const emoji = CATEGORY[category] ;

  return (
    <li
      onClick={onSelect}
      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:border-emerald-500/40 hover:bg-zinc-800 transition-all duration-200 cursor-pointer"
    >
      <p className="font-semibold text-zinc-100 capitalize tracking-wide">
        {name} {emoji}
      </p>
      <p className="text-m text-zinc-400">
        Quantity: <span className="text-emerald-400 font-medium">{quantity}</span>
      </p>
      <p className="text-xm text-zinc-400">
        Category: <span className="text-zinc-300">{category}</span>
      </p>
    </li>
  );
}
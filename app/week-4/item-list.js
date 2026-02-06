import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  return (
    <ul className="space-y-2">
      {itemsData.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
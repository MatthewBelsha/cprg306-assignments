export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li 
      className="m-3 p-4 rounded-lg bg-gray-600 text-white border-3 border-gray-800 cursor-pointer"
      onClick={onSelect}
      tabIndex={0}
      role="button"
      aria-label={`Select ${name}`}
      >
      <b className="capitalize">{name}</b> <br />
      Buy {quantity} ({category})
    </li>
  );
}

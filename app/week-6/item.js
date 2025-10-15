export default function Item({ name, quantity, category }) {
  return (
    <li className="m-3 p-4 rounded-lg bg-gray-600 text-white border-5 border-gray-800">
      <b className="capitalize">{name}</b> <br />
      Buy {quantity} ({category})
    </li>
  );
}

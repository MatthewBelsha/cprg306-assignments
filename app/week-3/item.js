// create a component that accepts name, quantity, and category as props and display them in a list item element
export default function Item({ props }) {
  return (
    <li className="m-3 p-8 rounded-lg bg-gray-600 ">
      <b>{props.name}</b> <br></br> Buy in {props.quantity} ({props.category})
    </li>
  );
}

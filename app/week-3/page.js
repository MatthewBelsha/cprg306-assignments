import ItemList from "./item-list";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center ">
      <div className="p-2 m-3 justify-center text-center text-3xl font-bold font-style italic">
        <h1>Shopping list</h1>
      </div>
      <div className="space-y-4 p-4 justify-center text-center rounded-lg">
        <ItemList />
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <div className="flex gap-4 flex-col sm:flex-row">
          <li>
            <a href="./week-2" target="_blank" rel="noopener noreferrer">
              Week 2 Assignment
            </a>
          </li>
        </div>
      </main>
    </div>
  );
}

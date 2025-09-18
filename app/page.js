import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex gap-4 flex-col sm:flex-row">
        <ul>
          <li>
            <Link href="./week-2" target="_blank" rel="noopener noreferrer">
              Week 2 Assignment
            </Link>
          </li>
          <li>
            <Link href="./week-3" target="_blank" rel="noopener noreferrer">
              Week 3 Assignment
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

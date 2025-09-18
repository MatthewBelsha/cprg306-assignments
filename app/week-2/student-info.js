import Link from "next/link";
export default function StudentInfo() {
  return (
    <main>
      <title>Student Info</title>
      <h2>Matthew Belsham</h2>
      <Link
        href="https://github.com/MatthewBelsha?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
    </main>
  );
}

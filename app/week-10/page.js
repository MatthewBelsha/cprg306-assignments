"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#cae8ff] text-blue-800">
      {!user ? (
        <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">A10: Welcome to the Shopping List App</h1>
          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
          >
            Sign in with GitHub
          </button>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p> Welcome, <b>{user.displayName}</b> ({user.email})</p>
          <Link href="/week-10/shopping-list" className="text-blue-800 font-semibold underline">
            Go to Shopping List
          </Link>
          <br />

          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
            Sign out
          </button>
        </div>
      )}
    </main>
  );
}

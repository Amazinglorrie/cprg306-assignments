"use client";

import { useRouter } from "next/navigation";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
      router.push("/week-10/shopping-list");
    } catch (error) {
      console.error("Sign in error:", error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Week 10 - Shopping List</h1>
      {user ? (
        <div className="flex flex-col items-center gap-4">
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded">
            Sign Out
          </button>
          <button onClick={() => router.push("/week-10/shopping-list")} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
            Go to Shopping List
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded">
          Sign In with GitHub
        </button>
      )}
    </main>
  );
}
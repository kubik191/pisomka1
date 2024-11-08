"use client";

import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <h1>Welcome, {session.user?.name}!</h1>
          <p>Email: {session.user?.email}</p>
          <a href="/sign-out">Sign Out</a>
        </div>
      ) : (
        <div>
          <h1>Welcome to the App</h1>
          <a href="/sign-in">Sign In</a>
        </div>
      )}
    </div>
  );
}

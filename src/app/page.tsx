"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  return (
    <SessionProvider>
      <OtherHome />
    </SessionProvider>
  );
}

function OtherHome() {
  const session = useSession();
  return (
    <div>
      {session.status === "authenticated" && (
        <button onClick={() => signOut()}>signout</button>
      )}
      {session.status === "unauthenticated" && (
        <button onClick={() => signIn()}>signin</button>
      )}
    </div>
  );
}

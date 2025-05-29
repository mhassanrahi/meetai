"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onError: (context) => {
          alert(context.error.message);
        },

        onSuccess(context) {
          console.log(context);
        },
      }
    );
  };

  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (session) {
    return <div>Logged in {session.user.name}</div>;
  }

  return (
    <div className="text-red-500 flex flex-col items-center justify-center h-screen">
      <h1>Sign up</h1>

      <form onSubmit={signUp}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
}

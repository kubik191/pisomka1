"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn("google")}
      >
        Sign In with Google
      </Button>
    </div>
  );
}

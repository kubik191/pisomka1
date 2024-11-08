"use client";

import { signOut } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignOutPage() {
  return (
    <div>
      <h1>Sign Out</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

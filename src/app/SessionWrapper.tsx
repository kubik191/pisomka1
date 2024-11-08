"use client"; // This line makes it a Client Component

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface SessionWrapperProps {
  children: ReactNode;
}

export default function SessionWrapper({ children }: SessionWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
export default function AuthAction() {
  return (
    <>
      <Unauthenticated>
        <Button>
          <SignInButton />
        </Button>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading>Loading...</AuthLoading>
    </>
  );
}

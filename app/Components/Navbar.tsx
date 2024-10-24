"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
   <>
   
   <ClerkProvider>
     <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-3 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-3">
          <ThemeDropdown />

          <Button
            className="source-code-btn flex items-center gap-2"
            onClick={() => {
              router.push("/dashboard");;
            }}
          >
           Dashboard
          </Button>
          
      <SignedOut>
        <SignInButton />
      </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
        </div>
      </div>
    </div>
  </ClerkProvider>
   
   </>
  );
}

export default Navbar;

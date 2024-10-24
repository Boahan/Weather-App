"use client";
import { Button } from "@/components/ui/button";
import { RedirectToSignIn, SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs"; // Import SignIn component from Clerk
import Image from "next/image";
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <SignInButton>
      <Button variant={"outline"} className="w-1500 h-1500 rounded">
      <Image src={"/app-logo.png"} alt="logo" width={200} height={200} />
      </Button>
    </SignInButton>
    <SignedIn>
        <RedirectToSignIn />
      </SignedIn>
    
    <div>
      <div className="subpixel-antialiased flex items-center gap-5 text-8xl  font-extrabold tracking-widest">
        <label>Weather App</label>
      </div>
    </div>
    </main>
  );
}

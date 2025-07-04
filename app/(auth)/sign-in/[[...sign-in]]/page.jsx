"use client";
import { SignIn } from "@clerk/clerk-react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Page;

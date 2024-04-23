"use client";
import { ModeToggle } from "./ThemeSwitch";
export default function Navbar() {
  return (
    <div className="min-w-screen flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-2xl font-bold">anshnk</h1>
    <div className="flex items-center gap-4">
      </div>
      <div className="flex space-x-4">
        <ModeToggle />
      </div>
    </div>
  );
}

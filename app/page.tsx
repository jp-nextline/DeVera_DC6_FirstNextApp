import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Hello, my name is Jo De Vera!
      </h1>

      <p>
        I am a BSIT student interested in programming,
        technology, and game development.
        I enjoy learning new things and improving
        my skills through different projects.
      </p>

      <Link href="/projects">
        See my projects
      </Link>
    </main>
  );
}
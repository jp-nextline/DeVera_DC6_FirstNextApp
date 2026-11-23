<<<<<<< HEAD
import Link from "next/link";

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
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3x1 font-bold">
          Hi, I'm Jollan Oliver De Vera!
        </h1>
        <p className="mt-2">
          Welcome to my domain, my first Next.js application.
        </p>
      </main>
    </div>
  );
}
>>>>>>> 8c1c047be67a0caa336e2b1c6c2fa7bbb1f9196e

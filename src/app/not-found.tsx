import Link from "next/link";
import { MagneticButton } from "@/components/animations/magnetic-button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-32 outline-none">
      <div className="max-w-xl text-center">
        <p className="type-label">404</p>
        <h1 className="type-page-title mt-4">Page not found</h1>
        <p className="type-body mt-6">
          The page you&apos;re looking for may have moved or no longer exists.
          Return home to explore King Udofia&apos;s work.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton
            href="/"
            className="cursor-hover bg-gold px-6 py-3 text-sm uppercase tracking-widest text-background"
          >
            Back to Home
          </MagneticButton>
          <Link
            href="/work-with-king"
            className="cursor-hover border border-gold px-6 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
          >
            Work With King
          </Link>
        </div>
      </div>
    </main>
  );
}

'use client'

import Link from "next/link";
import { BsArrowLeft, BsHouseDoor } from "react-icons/bs";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-base-100 px-6">

      {/* Background Effects */}
      <div className="absolute inset-0">

        {/* Gradient Glow */}
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-[32px] border border-base-300 bg-base-200/80 backdrop-blur-2xl shadow-2xl p-10 md:p-16 text-center">

        {/* Small Badge */}
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
          ERROR 404
        </div>

        {/* Huge Number */}
        <h1 className="mt-8 text-8xl md:text-[170px] font-black leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-base-content">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg leading-8 text-base-content/70">
          Sorry, the page you are looking for doesn’t exist,
          may have been moved, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="btn btn-primary btn-lg rounded-2xl px-8"
          >
            <BsHouseDoor className="text-lg" />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="btn btn-outline btn-lg rounded-2xl px-8"
          >
            <BsArrowLeft className="text-lg" />
            Go Back
          </button>

        </div>

        {/* Footer Text */}
        <p className="mt-10 text-sm text-base-content/40">
          © 2026 Alpha Dashboard. All rights reserved.
        </p>

      </div>

    </main>
  );
}
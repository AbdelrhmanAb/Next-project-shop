'use client';

// app/not-found.tsx

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            </div>

            {/* Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Content */}
            <div className="relative z-10 max-w-2xl text-center">

                {/* Badge */}
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl">
                    ERROR 404
                </div>

                {/* Main Heading */}
                <h1 className="mt-8 text-7xl font-black tracking-tight sm:text-8xl md:text-9xl">
                    Lost in Space
                </h1>

                {/* Description */}
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/60 md:text-lg">
                    The page you’re trying to access doesn’t exist,
                    was removed, or is temporarily unavailable.
                </p>

                {/* Actions */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
                    >
                        Return Home
                        <BsArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>

                    <button
                        onClick={() => history.back()}
                        className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
                    >
                        Go Back
                    </button>
                </div>

                {/* Huge 404 Background */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none text-[220px] font-black text-white/[0.03] sm:text-[300px]">
                    404
                </div>
            </div>
        </main>
    );
}
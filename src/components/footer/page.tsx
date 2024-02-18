'use client'
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col relative text-center max-w-5xl px-10 justify-evenly mx-auto items-center bottom-10">
      <small className="mb-2 text-center text-xs">
        &copy; 2024 M.Tahir. All rights reserved.
      </small>
      <p className="text-xs text-center">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS, Sanity.io, React Timeline,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}

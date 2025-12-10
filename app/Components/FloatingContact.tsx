"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-meteorite-600 hover:bg-violet-900 text-white font-bold px-3 py-2 rounded-full shadow-lg transition-all"
      >
        Contact Me
      </button>

      {/* Popup Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-xl p-4 border">
          <h3 className="font-semibold text-lg mb-3">📩 Contact Me</h3>

          <form
            method="POST"
            action="/api/contact"
            className="flex flex-col space-y-3"
          >
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
              className="border px-3 py-2 rounded"
            />

            <textarea
              name="message"
              placeholder="Your message"
              required
              className="border px-3 py-2 rounded h-24"
            ></textarea>

            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
}

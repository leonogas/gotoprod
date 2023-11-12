"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      console.log(e.target.tagName);
      if (!menuRef.current.contains(e.target) && e.target.tagName !== "A") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-slate-600">
          <Link href="/">
            <div className="flex-shrink-0 font-bold tracking-wider">
              AFONSO TESTE
            </div>
          </Link>

          <div ref={menuRef}>
            <div className="hidden md:block">
              <Menu />
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:text-white transition duration-150 ease-in-out"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <svg
                className="h-6 w-6"
                stroke="black"
                fill={showMobileMenu ? "#000000" : "none"}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    showMobileMenu
                      ? "M18 15a1 1 0 0 1-.64-.23L12 10.29l-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.41l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .13 1.41A1 1 0 0 1 18 15z"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:hidden">{showMobileMenu && <Menu />}</div>
      </nav>
    </>
  );
}

export default App;

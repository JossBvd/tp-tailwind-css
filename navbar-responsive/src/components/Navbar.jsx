import { React, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav class="bg-slate-100 flex justify-between p-6 shadow-md">
      <div>
        <img src="https://picsum.photos/id/238/50/50" alt="picsum.photos" />
      </div>
      <div class="flex items-center gap-6 relative">
        <i class="fa-solid fa-bars fa-2x sm:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        {/* Menu Burger */}
        {isMenuOpen ? (
          <div
          className={`absolute top-full right-0 mt-2 bg-slate-100 shadow-lg p-4 flex flex-col gap-4 w-40 rounded-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">🔍</a>
          </div>
        ) : (
          ""
        )}
        {/* Lien navbar */}
        <div class="hidden sm:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">🔍</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

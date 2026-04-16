import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

interface NavLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks: NavLink[] = [
    { name: "FEATURES", href: "features" },
    { name: "HOW IT WORKS", href: "how-it-works" },
    { name: "TESTIMONIALS", href: "testimonials" },
    { name: "PRICING", href: "pricing" },
    { name: "FAQ", href: "faq" },
  ];

  const toggleMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-[18px] font-bold text-[#5A5C63] tracking-tight">
              Crystal Stock Keeper
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                className="text-[13px] cursor-pointer font-bold text-[#878A92] hover:text-[#1A47FE] transition-colors tracking-[1%]"
              >
                <Link to={link.href} smooth={true} duration={500}>
                  {link.name}
                </Link>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://crystal-stock-keeper.vercel.app/"
              target="_blank"
              className="text-[15px] font-semibold text-[#5A5C63] hover:text-[#1A47FE] transition-colors"
            >
              Log In
            </a>
            <button className="bg-black text-white px-7 py-3 rounded-full text-[14px] font-bold tracking-wide hover:bg-gray-800 transition-colors">
              <a
                href="https://crystal-stock-keeper.vercel.app/signup"
                target="_blank"
              >
                Get Started
              </a>
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#5A5C63] focus:outline-none"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-[#F8F9FA] flex flex-col transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="px-6 h-[80px] flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <span className="text-[18px] font-bold text-[#5A5C63] tracking-tight">
              Crystal Stock Keeper
            </span>
          </div>
          <button
            onClick={toggleMenu}
            className="text-[#5A5C63] focus:outline-none bg-gray-200/50 rounded-full p-2 hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center  flex-1 gap-8 px-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[20px] font-bold  text-[#21242C] hover:text-[#1A47FE] transition-colors tracking-tight"
            >
              <Link to={link.href} smooth={true} duration={500}>
                {link.name}
              </Link>
            </a>
          ))}

          <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
            <button className="w-full text-center py-4 text-[16px] font-semibold text-[#5A5C63] border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
              <a
                target="_blank"
                href="https://crystal-stock-keeper.vercel.app/"
              >
                Log In
              </a>
            </button>
            <button className="w-full text-center py-4 bg-black text-white rounded-full text-[16px] font-bold hover:bg-gray-800 transition-colors">
              <a
                target="_blank"
                href="https://crystal-stock-keeper.vercel.app/signup"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

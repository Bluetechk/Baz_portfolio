import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubLink[];
}

const navLinks: NavItem[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "About Baz", href: "/about" },
      { label: "Speaker", href: "/speaker" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    label: "DIARY OF A THRIVING MAN",
    href: "/blog",
    children: [
      { label: "Articles", href: "/blog" },
      { label: "Videos", href: "/videos" },
      { label: "Poems", href: "/Blogg" },
      { label: "Quotes", href: "/quotes" },
      { label: "Press Coverage", href: "/press" },
    ],
  },
  {
    label: "SHOP",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Books", href: "/books" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>


      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="container flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center py-2">
            <img 
              src="/color_typography_logo/real_logo.png" 
              alt="Baz Emmanuel Barzon" 
              className="h-14 md:h-16 lg:h-18 object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5" ref={dropdownRef} onMouseLeave={() => setActiveDropdown(null)}>
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button
                    className="flex items-center gap-1.5 text-sm md:text-[15px] tracking-[0.1em] font-bold text-ink-black hover:text-royal-blue transition-colors duration-300"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180 text-royal-blue" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm md:text-[15px] tracking-[0.1em] font-bold text-ink-black hover:text-royal-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && activeDropdown === link.label && (
                  <div 
                    className="absolute top-full left-0 pt-4 w-[220px] animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-300 z-50"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl py-3 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-6 py-3 text-[15px] font-bold tracking-wide text-ink-black hover:text-royal-blue hover:bg-gray-50 hover:pl-8 transition-all duration-300"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/book-keynote"
              className="bg-royal-blue text-white px-8 py-3 text-sm tracking-widest font-black hover:scale-105 hover:bg-navy hover:shadow-lg transition-all duration-300 rounded-full"
            >
              BOOK BAZ
            </Link>
          </div>

          <button className="lg:hidden text-ink-black" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 max-h-[80vh] overflow-y-auto shadow-xl">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-6 py-4 text-base font-semibold text-gray-700 hover:text-royal-blue hover:bg-gray-50"
                    >
                      {link.label}
                      <ChevronDown size={18} className={`transition-transform duration-200 ${mobileExpanded === link.label ? "rotate-180 text-royal-blue" : ""}`} />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="bg-gray-50/50">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-10 py-3 text-sm font-medium text-gray-600 hover:text-royal-blue"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="block px-6 py-4 text-base font-semibold text-gray-700 hover:text-royal-blue hover:bg-gray-50"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-6 pt-6 pb-4 flex flex-col gap-3">
              <Link to="/book-keynote" className="inline-block bg-royal-blue text-white px-5 py-3 text-sm tracking-widest font-black text-center rounded-full hover:bg-navy transition-colors">
                BOOK BAZ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "CORPORATE", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "CAREERS", href: "/careers" },
  { name: "DOWNLOADS", href: "/downloads" },
  { name: "FEEDBACK", href: "/feedback" },
  { name: "CONTACT US", href: "/contact" },
];

const careersSubmenu = [
  { label: "CURRENT OPENINGS", href: "/careers" },
  { label: "HOT REQUIREMENTS", href: "/careers/hot-requirements" },
  { label: "JUPITER JOB SECURITY", href: "/careers/job-security" },
  { label: "CROSS PLATFORM TRAINING", href: "/careers/cross-platform-training" },
  { label: "JUPITER COMPENSATION AND BENEFITS", href: "/careers/compensation" },
  { label: "THE JUPITER FUTURE", href: "/careers/future" },
  { label: "EMPLOYEE REFERRAL PROGRAM", href: "/careers/referral-program" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
             <div className="h-10 sm:h-12 w-auto flex items-center justify-center bg-white/10 rounded-lg p-1 backdrop-blur-sm shadow-sm group-hover:bg-white/20 transition-all">
               {!logoError ? (
                 <img src="https://www.jupiterconsulting.com/wp-content/uploads/2013/09/jcs1.png" alt="Jupiter Consulting Services Logo" className="h-full w-auto object-contain drop-shadow-md" onError={() => setLogoError(true)} />
               ) : (
                 <span className="text-white font-bold text-xl tracking-tighter px-2">JCS</span>
               )}
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-lg text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors">
                 JUPITER
               </span>
               <span className="text-[0.65rem] text-white/60 font-medium tracking-[0.2em] uppercase leading-tight">
                 Consulting Services
               </span>
             </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200",
                    location.pathname === item.href || (item.name === "CAREERS" && location.pathname.startsWith('/careers'))
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </Link>
                {item.name === "CAREERS" && (
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[280px] flex flex-col rounded-xl overflow-hidden mt-1 p-2 gap-0.5">
                      {careersSubmenu.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          to={subItem.href} 
                          className="px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-amber-400 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-slate-900 border-b border-white/10"
          >
            <div className="px-4 py-4 space-y-2 border-t border-white/10">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md justify-start text-sm font-bold tracking-wider",
                      location.pathname === item.href || (item.name === "CAREERS" && location.pathname.startsWith('/careers'))
                        ? "bg-amber-400/10 text-amber-500"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.name === "CAREERS" && (
                    <div className="pl-6 mt-1 space-y-1 border-l border-white/10 ml-4 py-1">
                      {careersSubmenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-3 py-2 rounded-md text-xs font-semibold text-slate-400 hover:text-amber-400 hover:bg-white/5"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

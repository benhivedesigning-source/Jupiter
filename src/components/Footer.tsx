import { Link } from "react-router-dom";
import { Globe, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-20 pb-10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-10 w-auto flex items-center justify-center bg-white/10 rounded-lg p-1 group-hover:bg-white/20 transition-all shadow-sm">
                {!logoError ? (
                  <img 
                    src="https://www.jupiterconsulting.com/wp-content/uploads/2013/09/jcs1.png" 
                    alt="Jupiter Consulting Services Logo" 
                    className="h-full w-auto object-contain drop-shadow-md"
                    onError={() => setLogoError(true)} 
                  />
                ) : (
                  <span className="text-white font-bold text-lg tracking-tighter px-1">JCS</span>
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
            <p className="text-white/60 text-sm max-w-xs text-balance">
              Transforming enterprises through innovative strategies and cutting-edge technology solutions designed for the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">IT Consulting</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Enterprise Solutions</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Staff Augmentation</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">Application Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/industries" className="text-white/60 hover:text-white transition-colors text-sm">Industries</Link></li>
              <li><Link to="/careers" className="text-white/60 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link to="/downloads" className="text-white/60 hover:text-white transition-colors text-sm">Downloads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li>P.O. Box 56625<br />Atlanta, GA 30343</li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Form</Link></li>
              <li><Link to="/feedback" className="hover:text-white transition-colors">Feedback</Link></li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors cursor-pointer group">
                Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Jupiter Consulting Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

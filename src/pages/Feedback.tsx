import { motion } from "framer-motion";
import { Send, RefreshCw } from "lucide-react";
import { useState } from "react";

export function Feedback() {
  const [captchaValue, setCaptchaValue] = useState("");
  
  return (
    <div className="bg-[#f8fafc] min-h-screen text-slate-900 font-sans">
       {/* Creative Banner Header */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          {/* Banner Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          {/* Abstract glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl mx-auto"
             >
                <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-amber-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                   Feedback
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
                   We Value Your Opinion
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
                  Your insights and suggestions help us continuously improve and shape the future of our services.
                </p>
             </motion.div>
          </div>
       </section>

      <section className="px-4 py-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
            <strong className="font-extrabold text-[#d97706] text-xl">Jupiter Consulting Services</strong> <br className="hidden md:block" /> appreciates your valuable feedback. We thank you for visiting our web site. Please Enter your Contacts and Feedback here.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden"
        >
          {/* subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]/50 focus:border-[#d97706]/50 transition-all font-medium placeholder:text-slate-400" 
                  placeholder="Your Full Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email id <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]/50 focus:border-[#d97706]/50 transition-all font-medium placeholder:text-slate-400" 
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
              <input 
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]/50 focus:border-[#d97706]/50 transition-all font-medium placeholder:text-slate-400" 
                placeholder="What is this regarding?"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
              <textarea 
                rows={6} 
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]/50 focus:border-[#d97706]/50 transition-all font-medium placeholder:text-slate-400 resize-none" 
                placeholder="Tell us what you think..."
              />
            </div>

            <div className="pt-6 pb-2 border-t border-slate-100 mt-8">
              <label className="text-sm font-bold text-slate-700 ml-1 mb-3 block">Enter the code <span className="text-red-500">*</span></label>
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <div className="flex items-center gap-3 bg-slate-50 p-2 pr-4 rounded-2xl border border-slate-200 self-start shadow-inner">
                  <div className="bg-gradient-to-br from-[#0f172a] to-slate-800 text-white tracking-[0.4em] font-serif italic font-bold text-2xl px-6 py-3 rounded-xl select-none relative overflow-hidden shadow-md">
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiLz4KPC9zdmc+')]"></div>
                    <span className="relative z-10 drop-shadow-md">Q U T E</span>
                  </div>
                  <button type="button" className="text-slate-400 hover:text-slate-700 transition-colors p-2 rounded-full hover:bg-slate-200" title="Reload code">
                    <RefreshCw className="w-5 h-5" />
                  </button>
                </div>
                <input 
                  type="text" 
                  required
                  value={captchaValue}
                  onChange={(e) => setCaptchaValue(e.target.value)}
                  className="flex-1 w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d97706]/50 focus:border-[#d97706]/50 transition-all font-medium uppercase text-center sm:text-left text-lg placeholder:text-slate-400 placeholder:normal-case placeholder:text-base tracking-widest sm:min-w-[200px]" 
                  placeholder="Type the code here"
                  maxLength={4}
                />
              </div>
            </div>

            <div className="pt-6 text-center sm:text-left">
              <button 
                type="submit"
                className="w-full sm:w-auto bg-[#d97706] overflow-hidden group text-white rounded-full px-10 py-4 font-bold text-lg tracking-wide hover:bg-amber-700 transition-all flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-amber-700/20 hover:-translate-y-1 relative"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span>Submit Feedback</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </form>
        </motion.div>
      </section>
    </div>
  );
}

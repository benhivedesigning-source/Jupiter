import { motion } from "framer-motion";
import { Users, Send } from "lucide-react";

export function JupiterFuture() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      {/* Creative Banner Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        {/* Abstract glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/20 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              Careers
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
              The Jupiter Future
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
               Join an extended family of like-minded professionals committed to stability and growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden mb-12"
        >
           <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 flex-shrink-0">
                    <Users className="w-8 h-8 text-amber-600" />
                 </div>
                 <h2 className="text-3xl font-bold text-[#0f172a]">A Stable Environment</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
                   <p className="p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600 border-l-4 border-l-amber-500">
                      "Our mission is to build long term win-win partnerships and alliances with each of our employees and customers."
                   </p>

                   <p>
                      We at Jupiter are proud that we have a low turnover of employees, primarily due to our commitment towards fostering an environment conducive to stability and growth. 
                   </p>

                   <p>
                      Our team is an extended family of like-minded professionals, and we work towards providing the security, stability, and encouragement that is to be expected from a family. We can assure our prospective employees that their decision to join this family will reap them many rewards in their future.
                   </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                     alt="Team collaborating" 
                     className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>
           </div>
        </motion.div>

        {/* Leave a Reply Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden relative"
        >
          {/* Top border accent matching the design */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-amber-500" />
          
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 uppercase tracking-wide">Leave a Reply</h3>
            <p className="text-slate-500 italic mb-8 pb-6 border-b border-slate-100">
              Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest w-32 shrink-0 md:pt-4">
                  Comment <span className="text-red-500">*</span>
                </label>
                <textarea 
                  required
                  rows={6}
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all resize-y"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest w-32 shrink-0">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest w-32 shrink-0">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  required
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-widest w-32 shrink-0">
                  Website
                </label>
                <input 
                  type="url" 
                  className="flex-1 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-900 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all"
                />
              </div>

              <div className="flex items-start gap-4 md:pl-[calc(8rem+1rem)]">
                <input 
                  type="checkbox" 
                  id="save-info"
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-amber-500 focus:ring-amber-500"
                />
                <label htmlFor="save-info" className="text-sm font-bold text-slate-700 uppercase tracking-wide leading-relaxed">
                  Save my name, email, and website in this browser for the next time I comment.
                </label>
              </div>

              <div className="md:pl-[calc(8rem+1rem)] pt-6">
                <button 
                  type="submit"
                  className="bg-amber-600 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

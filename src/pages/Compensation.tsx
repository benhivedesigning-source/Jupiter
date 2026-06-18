import { motion } from "framer-motion";
import { Award, Heart, Star } from "lucide-react";

export function Compensation() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      {/* Creative Banner Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
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
              Compensation & Benefits
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
               Recognizing and rewarding talent, loyalty, and commitment to professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
        >
           <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 flex-shrink-0">
                    <Award className="w-8 h-8 text-amber-600" />
                 </div>
                 <h2 className="text-3xl font-bold text-[#0f172a]">Industry-Leading Rewards</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
                   <p className="p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600 border-l-4 border-l-amber-500">
                      "Our mission is to build a long term win-win partnership and alliance with each of our Employee. Jupiter's compensation and benefits package is among the best in the industry."
                   </p>

                   <p>
                      We recognize that talent, loyalty, integrity, and commitment to professionalism and to the firm needs to be rewarded.
                   </p>
                </div>
                
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop" 
                     alt="Financial rewards" 
                     className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-slate-100">
                 <div className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white border text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 border-slate-100">
                    <Heart className="w-10 h-10 mx-auto mb-4 text-rose-500" />
                    <h3 className="font-bold text-slate-900 mb-2">Comprehensive Health</h3>
                    <p className="text-sm text-slate-500 font-normal">Full medical, dental, and vision coverage for you and your family.</p>
                 </div>
                 <div className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white border text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 border-slate-100">
                    <Star className="w-10 h-10 mx-auto mb-4 text-amber-500" />
                    <h3 className="font-bold text-slate-900 mb-2">Performance Bonuses</h3>
                    <p className="text-sm text-slate-500 font-normal">Rewarding excellence and commitment to the firm's success.</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

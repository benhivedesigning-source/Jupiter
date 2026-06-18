import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Rocket } from "lucide-react";

export function CrossPlatformTraining() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      {/* Creative Banner Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
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
              Cross Platform Training
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
               Empowering our consultants through continuous learning and technical evolution.
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
                    <BookOpen className="w-8 h-8 text-amber-600" />
                 </div>
                 <h2 className="text-3xl font-bold text-[#0f172a]">Continuous Skill Improvement</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-lg text-slate-700 leading-relaxed font-medium">
                   <p className="p-6 rounded-2xl bg-slate-50 border border-slate-100 italic text-slate-600 border-l-4 border-l-amber-500">
                      "Our mission is to build a long term win-win partnership and alliance with each of our employees. Jupiter is committed towards the long-term job security of its employees."
                   </p>

                   <p>
                      Jupiter recognizes that the foundation of a successful technical career lies in the constant improvement of skills, whether in enhancing what is already known, or in learning new and emerging technologies.
                   </p>

                   <p>
                      Therefore, the company subsidizes technical training costs for all its employees so that they may continue to learn and develop to be better consultants and better professionals.
                   </p>
                </div>
                
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                     alt="Students collaborating and learning" 
                     className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12 pt-12 border-t border-slate-100">
                 <div className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white border text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 border-slate-100">
                    <GraduationCap className="w-10 h-10 mx-auto mb-4 text-emerald-500" />
                    <h3 className="font-bold text-slate-900 mb-2">Subsidized Learning</h3>
                    <p className="text-sm text-slate-500 font-normal">We cover training costs to support your growth.</p>
                 </div>
                 <div className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-white border text-cyan-600 hover:border-cyan-200 hover:shadow-lg transition-all duration-300 border-slate-100">
                    <Rocket className="w-10 h-10 mx-auto mb-4 text-cyan-500" />
                    <h3 className="font-bold text-slate-900 mb-2">Emerging Technologies</h3>
                    <p className="text-sm text-slate-500 font-normal">Stay ahead of the curve with modern tech stacks.</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

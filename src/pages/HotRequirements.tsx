import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Clock, FileText } from "lucide-react";

export function HotRequirements() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      {/* Creative Banner Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        {/* Abstract glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

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
              Hot Requirements
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
               Find the latest high-priority job openings and opportunities at Jupiter Consulting Services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden max-w-5xl mx-auto"
        >
           <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6 text-[#d97706]" />
                  Notice of Job Opportunity
                </h2>
                <p className="text-slate-500 font-medium">Software Engineer Position</p>
              </div>
           </div>

           <div className="p-6 md:p-10 divide-y divide-slate-100">
               <div className="grid md:grid-cols-4 gap-4 py-6 first:pt-0">
                  <div className="font-bold text-slate-500 flex items-start gap-2">
                     <FileText className="w-5 h-5 text-slate-400 mt-0.5" />
                     Job duties & Requirements
                  </div>
                  <div className="md:col-span-3 text-slate-700 leading-relaxed space-y-4">
                    <p>
                      Design, development, test, configure, customize, &amp; implement software apps; analyze user requirements; modify &amp; enhance existing software; resolve technical errors, etc. Requires Master's deg. or education evaluated to Master's in C.Sc., Info system, or related field. Demonstrated knowledge of Linux, SQL Server, Weblogic, XML, &amp; Oracle required. Will accept any suitable combination of education, training, and/or work exp.
                    </p>
                    <p className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm">
                      Submit resumes: Recruitment &amp; Employment Office, Jupiter Consulting Services, LLC, Attn: Job Ref#: JUP06290, P.O. Box 56625 , Atlanta , GA 30
                    </p>
                  </div>
               </div>

               <div className="grid md:grid-cols-4 gap-4 py-6">
                  <div className="font-bold text-slate-500 flex items-start gap-2">
                     <Briefcase className="w-5 h-5 text-slate-400 mt-0.5" />
                     Position Details
                  </div>
                  <div className="md:col-span-3">
                     <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                           <DollarSign className="w-5 h-5 text-emerald-600" />
                           <div>
                              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Rate of Pay</div>
                              <div className="font-semibold text-slate-800">$75,500.00 <span className="text-slate-500 font-normal">per year</span></div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                           <Clock className="w-5 h-5 text-blue-600" />
                           <div>
                              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Work Schedule</div>
                              <div className="font-semibold text-slate-800">9:00 a.m. – 5:00 p.m. <span className="text-slate-500 font-normal">(M-F)</span></div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                           <MapPin className="w-5 h-5 text-amber-600" />
                           <div>
                              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Work Location</div>
                              <div className="font-semibold text-slate-800">St. Louis, MO</div>
                           </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                           <Briefcase className="w-5 h-5 text-purple-600" />
                           <div>
                              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Employer</div>
                              <div className="font-semibold text-slate-800">Jupiter Consulting Services, LLC</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="py-6 pb-0">
                  <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
                     <div className="text-sm text-amber-900 leading-relaxed">
                        <span className="font-bold uppercase tracking-wider block mb-2 text-amber-700">Legal Notice</span>
                        This notice is being posted in connection with the filing of an application for permanent alien labor certification. Any person may provide documentary evidence bearing on the application to the Certifying Officer (CO) of the Department of Labor at U.S. Department of Labor, Employment and Training Administration, Office of Foreign Labor Certification, Atlanta National Processing Center, 233 Peachtree Street, Suite 410, Atlanta, GA 30303.
                     </div>
                  </div>
               </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

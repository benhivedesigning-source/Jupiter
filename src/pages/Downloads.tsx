import { motion } from "framer-motion";
import { Download, FileText, FileDown, AlertCircle } from "lucide-react";

export function Downloads() {
  const downloads = [
    { name: "Jupiter Time Sheet", file: "JCS-time-sheet.doc" },
    { name: "Jupiter Brochure", file: "Jupiter.pdf" },
    { name: "W-9 Form", file: "W-9.pdf" },
    { name: "W-4 Form", file: "W-4.pdf" },
    { name: "Expense Report", file: "Jupiter-Expense-Reports.xls" },
    { name: "Employee Hand Book", file: "Employee Hand Book" },
    { name: "Federal labor Law Posting", file: "Fed_Poster" }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
       {/* Creative Banner Header */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          {/* Banner Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
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
                   Resources
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
                   Downloads
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
                  Access essential forms, timesheets, handbooks, and corporate resources.
                </p>
             </motion.div>
          </div>
       </section>

      <section className="px-4 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
               <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-3">
                 <FileDown className="w-6 h-6 text-[#d97706]" />
                 Available Documents
               </h2>
            </div>
            <div className="p-4 sm:p-8">
              <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                {downloads.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ backgroundColor: "rgba(248, 250, 252, 1)" }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 gap-4 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#d97706] group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-700">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3 sm:w-1/2">
                      <span className="text-slate-500 font-medium flex-1 truncate">{item.file}</span>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-[#d97706] font-bold text-sm hover:bg-[#d97706] hover:text-white transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-200 shadow-lg shadow-amber-100/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                 <AlertCircle className="w-32 h-32 text-amber-600" />
               </div>
               <div className="relative z-10 w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-6 border border-amber-200">
                  <AlertCircle className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-amber-900 mb-4 relative z-10">
                 LCA Posting
               </h3>
               <p className="text-amber-800/80 font-medium leading-relaxed mb-8 relative z-10">
                 Labor Condition Application posting available for review.
               </p>
               <button className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors shadow-md relative z-10">
                  <Download className="w-5 h-5" />
                  LCA 03-16-20221 Download
               </button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

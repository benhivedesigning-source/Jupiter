import { motion } from "framer-motion";
import { Users, DollarSign, CalendarCheck, FileQuestion } from "lucide-react";

export function ReferralProgram() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      {/* Creative Banner Header */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
        {/* Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
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
              Employee Referral Program
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
               Reward your network. Earn bonuses by referring talented professionals to join our team.
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
           <div className="relative h-[300px] w-full">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
               alt="Team meeting" 
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
           </div>
           <div className="p-8 md:p-12 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  Who is Eligible to Participate?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed md:pl-16">
                  Any employee on Jupiter's payroll can participate with the exception of executive staff, employees in the Human Resources Department, and direct or indirect supervisors of the designated job opening.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 border border-cyan-100 flex-shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  What positions are bonus eligible?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed md:pl-16">
                  Any full or part-time position that has been posted on the Jupiter's website is bonus eligible for $500.00 to $800.00 based upon the position hired.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 flex-shrink-0">
                    <FileQuestion className="w-6 h-6" />
                  </div>
                  How do I refer someone?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed md:pl-16">
                  Your referral should complete an Employee Referral Bonus Form and submit it with the application at the time they complete the application for employment (this can be done as late as the new employee's first day of work). Only candidates referred from external sources qualify for the bonus. Anyone who has worked for Jupiter within the last twelve months does not qualify as bonus eligible candidates. This includes regular, student, as well as employees working at Jupiter through a temporary agency or as an independent consultant.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 flex-shrink-0">
                    <CalendarCheck className="w-6 h-6" />
                  </div>
                  When do I receive the bonus?
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed md:pl-16">
                  You will receive your bonus after the new employee has worked 90 consecutive business days. Both you and the new employee must be employed by Jupiter at the time of the bonus payment.
                </p>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

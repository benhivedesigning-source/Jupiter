import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Printer } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
       {/* Creative Banner Header */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          {/* Banner Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          {/* Abstract glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl mx-auto"
             >
                <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                   Get in Touch
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
                   Corporate Headquarters
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
                  We're here to help you transform your enterprise. Connect with our experts today.
                </p>
             </motion.div>
          </div>
       </section>

      <section className="px-4 py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Address Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-8 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50"
          >
             <div className="space-y-4 border-b border-slate-100 pb-8">
               <h2 className="text-2xl font-bold text-[#0f172a]">USA</h2>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#d97706] flex-shrink-0 mt-1 shadow-sm">
                     <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                     <p className="text-slate-600 font-medium leading-relaxed">
                        16024 Manchester Road, Suite 262<br/>
                        St. Louis, MO 63011
                     </p>
                  </div>
               </div>
             </div>

             <div className="space-y-6 pt-2">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#d97706] flex-shrink-0 shadow-sm">
                     <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-1">
                     <span className="font-bold text-slate-700 w-20 sm:w-24">Telephone:</span>
                     <span className="text-slate-500 font-medium whitespace-nowrap">(636)-343-5801</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#d97706] flex-shrink-0 shadow-sm">
                     <Printer className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-1">
                     <span className="font-bold text-slate-700 w-20 sm:w-24">Fax:</span>
                     <span className="text-slate-500 font-medium whitespace-nowrap">(636)-343-5894</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center text-[#d97706] flex-shrink-0 shadow-sm">
                     <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-1 overflow-hidden">
                     <span className="font-bold text-slate-700 w-20 sm:w-24">Email Us:</span>
                     <a href="mailto:jcs@jupiterconsulting.com" className="text-[#d97706] font-bold hover:text-amber-700 transition-colors truncate text-sm sm:text-base pr-2">
                       jcs@jupiterconsulting.com
                     </a>
                  </div>
               </div>
             </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-white p-4 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col"
          >
             <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.8266205804473!2d-90.57393468465492!3d38.583870878148974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d2b826b1fb0f%3A0xe54e61db1d06ffba!2s16024%20Manchester%20Rd%20Ste%20262%2C%20Ellisville%2C%20MO%2063011%2C%20USA!5e0!3m2!1sen!2sus!4v1684346889753!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 z-10"
                 title="Google Maps - 16024 Manchester Rd Ste 262"
               ></iframe>
               <div className="absolute inset-0 bg-slate-100 flex items-center justify-center -z-0">
                 <div className="animate-pulse flex items-center space-x-2 text-slate-400">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">Loading Map...</span>
                 </div>
               </div>
             </div>
             <div className="pt-4 px-4 text-center lg:text-left">
                <a 
                  href="https://goo.gl/maps/c6j1G1gYZXn4Y8k29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wide"
                >
                  View Larger Map
                </a>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

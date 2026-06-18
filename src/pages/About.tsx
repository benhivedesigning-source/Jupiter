import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const col1 = [
  "Automotive",
  "Brokerage",
  "Consulting",
  "Food/Beverage",
  "Pharmaceuticals",
  "Travel"
];

const col2 = [
  "Banking/Finance",
  "Chemical/Petroleum",
  "Distribution",
  "Insurance",
  "Retail"
];

const col3 = [
  "Biomedical",
  "Computers",
  "Education",
  "Manufacturing",
  "Telecommunications"
];

export function About() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
       {/* Creative Banner Header */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          {/* Banner Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
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
                   Our Legacy
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
                   About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Jupiter</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
                  Providing project and outsourcing solutions worldwide since our inception in 1999.
                </p>
             </motion.div>
          </div>
       </section>

      {/* Content */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-[#0f172a]">Jupiter Consulting Services</h2>
            <div className="space-y-6 text-[#475569] text-base md:text-lg leading-relaxed">
              <p>
                Jupiter Consulting Services is an IT (Information Technology) services company focused on providing project and outsourcing solutions and services for clients worldwide.
              </p>
              <p>
                Headquartered in St. Louis MO, Jupiter provides total solutions that deliver value while providing a competitive advantage for its clients.
              </p>
              <p>
                Since beginning operations in late 1998, Jupiter has developed a client base numbering several Fortune 100 firms, with whom we have signed multi-year contracts for a wide range of IT services.
              </p>
              <p>
                Jupiter works with its clients on-site, off-site, and offshore or in any combination that meets its clients' needs. Offshore support is provided through a sister company.
              </p>
              <p>
                We are among the fastest growing consulting companies in the country. We specialize in working with large client environments.
              </p>
              <p>
                We believe in providing quality services. All of our consultants are highly qualified and our goal is to provide top-level services to our clients at any cost. We excel in obtaining repeat business through strong client relationship building. We have a diversified client base in the following industries:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative aspect-square md:aspect-auto lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 text-white">
              <p className="text-3xl font-bold mb-2">Global Headquarters</p>
              <p className="text-blue-300 font-medium tracking-wide uppercase text-sm">St. Louis, MO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-[#f8fafc] py-24 px-4 border-y border-slate-200">
         <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-slate-200 shadow-xl shadow-slate-200/50">
               <div className="grid md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  
                  {/* Column 1 */}
                  <div className="pt-6 md:pt-0 pb-6 md:pb-0 md:pr-8">
                     <ul className="space-y-4">
                        {col1.map((item, i) => (
                           <li key={i} className="flex items-center text-[#334155] font-semibold text-lg italic hover:text-[#d97706] transition-colors">
                              <span className="w-2 h-2 rounded-full bg-[#d97706] mr-4 shadow-sm" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="pt-6 md:pt-0 pb-6 md:pb-0 md:px-8">
                     <ul className="space-y-4">
                        {col2.map((item, i) => (
                           <li key={i} className="flex items-center text-[#334155] font-semibold text-lg italic hover:text-[#d97706] transition-colors">
                              <span className="w-2 h-2 rounded-full bg-[#d97706] mr-4 shadow-sm" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="pt-6 md:pt-0 md:pl-8">
                     <ul className="space-y-4">
                        {col3.map((item, i) => (
                           <li key={i} className="flex items-center text-[#334155] font-semibold text-lg italic hover:text-[#d97706] transition-colors">
                              <span className="w-2 h-2 rounded-full bg-[#d97706] mr-4 shadow-sm" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* Vision & Goals Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-[#0f172a]">Our Vision & Goals</h2>
            <div className="space-y-8 text-[#475569] text-base md:text-lg leading-relaxed">
              <p className="font-semibold text-xl text-[#d97706]">
                Together we create an Enterprise for tomorrow and beyond.
              </p>
              <p>
                To be a globally respected organization delivering innovative solutions and services that help shape the digital age.
              </p>
              <p>
                To combine international; professional management expertise with a global technology workforce and work centers to provide IT project and outsourcing support responsively and cost-effectively.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-[#0f172a]">Our Mission</h2>
            <div className="space-y-6 text-[#475569] text-base md:text-lg leading-relaxed">
              <p>
                Our mission is to build long term win-win partnerships and alliances with each of our customers.
              </p>
              <p>
                Our clients and consultants remain our highest priority and we take pride in supporting both with honesty and respect. Their success is our success! Our dedication to providing clients superior service with competitive pricing has enabled us to grow and flourish over the past 5 years. We have global affiliates in 5 different countries and our consultants are working in 20 states in United States. Jupiter Consulting is a market oriented fast growing company and our goal is to set the industry standard in customer satisfaction and professionalism.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="pb-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50"
        >
           <div className="p-8 md:p-12 pb-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
              <span className="inline-block py-1 px-3 rounded-full bg-[#d97706]/10 text-[#d97706] text-xs font-bold tracking-widest uppercase mb-4 border border-[#d97706]/20 shadow-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f172a] mb-3">Differentiators</h2>
              <p className="text-slate-500 font-medium max-w-2xl mx-auto md:text-lg">Discover the key advantages that set Jupiter Consulting Services apart in the competitive landscape.</p>
           </div>
           
           <div className="w-full relative bg-white px-8 md:px-12 pt-8 md:pt-12">
             <div className="w-full h-64 md:h-96 relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group">
               <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Strategy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent opacity-80" />
             </div>
           </div>

           <div className="p-8 md:p-12 pt-10">
              <p className="font-bold text-lg md:text-xl text-[#0f172a] mb-8">
                 We are among the fastest growing consulting companies in the country.
              </p>
              <ul className="space-y-4">
                 {[
                   "Strong self sourcing capabilities from both the United States and India",
                   "Blue-chip US client base: multi-year contracts, multi-level projects",
                   "Strong Telecom Service Provider",
                   "Strong Data Warehousing technology",
                   "Effective resource management in a results-focused culture",
                   "Flat, Field-oriented management structure",
                   "In-depth knowledge of systems integration and systems outsourcing"
                 ].map((diff, i) => (
                   <li key={i} className="flex items-start text-[#475569] font-medium text-base md:text-lg">
                      <span className="w-2 h-2 rounded-full bg-[#d97706] mt-2.5 mr-4 shadow-sm shrink-0" />
                      {diff}
                   </li>
                 ))}
              </ul>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

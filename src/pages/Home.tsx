import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Briefcase, Network, Target, Monitor, Layout, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Creative Banner Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#020617]/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
        
        {/* Abstract glowing elements */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-32 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl w-full text-center p-10 md:p-16 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl relative overflow-hidden"
          >
             {/* Inner glass highlight */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs md:text-sm font-semibold mb-8 text-blue-300 relative z-10 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Modernizing Enterprise Infrastructure
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white relative z-10 drop-shadow-2xl">
              Transforming <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-emerald-300 to-cyan-300 drop-shadow-none">Ideas into Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 text-balance leading-relaxed max-w-2xl mx-auto relative z-10 font-medium drop-shadow-md">
              Jupiter Consulting Services is an IT services company focused on providing globally respected, innovative solutions and long-term win-win partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center relative z-10">
              <Link to="/services" className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-[#020617] transition-all hover:bg-gray-100 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Explore Services
              </Link>
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-black/40 px-8 text-base font-bold text-white border border-white/20 transition-all hover:bg-black/60 backdrop-blur-md hover:scale-105">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Served Strip */}
      <section className="bg-white/5 border-b border-border py-4 relative z-20 mt-[-2px] overflow-hidden backdrop-blur-xl border-t border-t-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="whitespace-nowrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mr-6 pr-6 border-r border-white/10 uppercase tracking-widest text-xs hidden md:block">
            Industries Served
          </div>
          <div className="flex-1 overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
              className="flex whitespace-nowrap text-black font-medium text-sm"
            >
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex shrink-0 items-center">
                  <span className="mx-4 hover:text-black/70 transition-colors cursor-default">Automotive</span> <span className="text-black/20">•</span>
                  <span className="mx-4 hover:text-black/70 transition-colors cursor-default">Banking/Finance</span> <span className="text-black/20">•</span>
                  <span className="mx-4 hover:text-black/70 transition-colors cursor-default">Biomedical</span> <span className="text-black/20">•</span>
                  <span className="mx-4 hover:text-black/70 transition-colors cursor-default">Brokerage</span> <span className="text-black/20">•</span>
                  <span className="mx-4 hover:text-black/70 transition-colors cursor-default">Chemical</span> <span className="text-black/20 opacity-0">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Strip */}
      <section className="border-b border-border bg-[#020617] py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { label: "Global Clients", value: "500+" },
              { label: "Successful Projects", value: "1,200+" },
              { label: "Industry Experts", value: "350+" },
              { label: "Years of Excellence", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</span>
                <span className="text-xs font-semibold tracking-wider text-white/40 uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Information Cards */}
      <section className="py-24 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#020617] text-white text-sm font-bold tracking-widest uppercase mb-6 shadow-xl shadow-slate-900/20">The Jupiter Difference</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-[#0f172a]">Core Philosophy</h2>
            <p className="text-lg text-slate-600 font-medium">To be a globally respected organization delivering innovative solutions and services that help shape a better future.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "About Us",
                desc: "Jupiter Consulting Services is an IT services company focused on providing end-to-end technology solutions and business consulting to global clients.",
                link: "/about",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Our Vision & Goals",
                desc: "To be a globally respected organization delivering innovative solutions and services that help shape a better future for our clients, employees, and communities.",
                link: "/about",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Our Mission",
                desc: "Our mission is to build long term win-win partnerships and alliances with each of our customers, providing them with exceptional value and service.",
                link: "/about",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-100 flex flex-col"
              >
                {/* Image Section */}
                <div className="h-64 relative overflow-hidden">
                   <img src={section.image} alt={section.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />
                   <h3 className="absolute bottom-6 left-8 right-8 text-2xl font-bold text-white drop-shadow-lg">{section.title}</h3>
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed text-base">
                    {section.desc}
                  </p>
                  <div className="mt-auto">
                    <Link to={section.link} className="inline-flex items-center text-sm font-bold text-[#d97706] uppercase tracking-wider transition-colors group-hover:text-amber-700">
                      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16 pt-10 border-t border-slate-200">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-[#0f172a]">Transformative Capabilities</h2>
            <p className="text-slate-600 font-medium text-lg">We deliver end-to-end consulting services designed to accelerate growth and operational excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-blue-600" />,
                title: "The ERP/CRM Group",
                desc: "Specializes in ERP/CRM implementation, upgrade, customization and support including SAP, Oracle Apps, and more."
              },
              {
                icon: <Network className="w-6 h-6 text-emerald-600" />,
                title: "The Networking/Admin Group",
                desc: "Expertise in Broadband, LAN/WAN, Remote Access, Security Systems, VoIP, and complete Infra-structure solutions."
              },
              {
                icon: <Target className="w-6 h-6 text-purple-600" />,
                title: "The PMO Group",
                desc: "PMP certified professionals with expertise in Agile, Scrum, Waterfall, and Six Sigma methodologies."
              },
              {
                icon: <Monitor className="w-6 h-6 text-rose-600" />,
                title: "The eBIZ Group",
                desc: "Develops web, e-commerce, Oracle E-Business Suite, and other Internet based applications."
              },
              {
                icon: <Layout className="w-6 h-6 text-cyan-600" />,
                title: "The GUI Group",
                desc: "Specializes in Microsoft's Visual Suite technologies for custom GUI, handheld, and utility design."
              },
              {
                icon: <Database className="w-6 h-6 text-amber-600" />,
                title: "The DB Group",
                desc: "Focuses on emerging RDBMS, Data Warehousing, Sybase, MS-SQL Server, Oracle and Informix."
              },
              {
                icon: <Server className="w-6 h-6 text-indigo-600" />,
                title: "AS/400 & Mainframe",
                desc: "Caters to IBM AS/400 and Mainframe customers with expertise in COBOL, DB2, CICS, RPG/400, etc."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-[2rem] bg-white border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all overflow-hidden flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-[1.25rem] bg-slate-50 flex items-center justify-center mb-6 relative z-10 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-[#0f172a]">{feature.title}</h3>
                <p className="text-slate-600 mb-6 relative z-10 text-sm font-medium leading-relaxed flex-1">{feature.desc}</p>
                <Link to="/services" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors relative z-10 mt-auto uppercase tracking-wide">
                  Explore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 relative overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-3xl p-12 md:p-16 border border-white/10 bg-[#0f172a]/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 border-2 border-transparent border-t-blue-500/30 rounded-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to reinvent your business?</h2>
            <p className="text-lg text-white/60 mb-8">
              Partner with Jupiter Consulting Services to navigate complexity and achieve digital superiority.
            </p>
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25">
              Start the Conversation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

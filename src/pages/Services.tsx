import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

const services = [
  {
    title: "The ERP/CRM Group",
    description: "The ERP/CRM Group specializes in ERP/CRM implementation, upgrade, customization and support. This group has resources with experience in such areas as: SAP R/3, PeopleSoft, Oracle Apps, Siebel 8.1, Lawson, and JD Edwards. We help to identify the best architecture and tools for integration of existing application and data, implementation of new packages, to provide custom functionality for competitive advantage.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The Networking/Admin Group",
    description: "This Group specializes in Broadband Communications, LAN/WAN CISCO IOS 15, NORTEL Networks (Frame, ATM, DSL, IP, FTTX etc), Remote Access Systems, Unix Systems, Windows OS, Security Systems, Video Distribution Networks including Streaming, Video Conf, and Broadcast, Telephone Networks including Avaya VoIP, UCCE, Wireless Networks including WIFI, Data Storage Arrays, Fiber Optic Distribution, Power Systems, Voice Mail, Monitoring Systems, Cable and Infra-structure, Security, Microwave, and Helpdesk.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The PMO Group",
    description: "This Group Specializes in PMP certified professionals with expertise in Agile, Scrum, Waterfall, Six Sigma methodologies and experience in Work Bench, MS Project 2013 software.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The eBIZ Group",
    description: "The eBIZ Group develops web, e-commerce, Oracle E-Business Suite, and other Internet based applications and web design/services for companies across a wide spectrum. The technology is centered on Java J2EE with complementing skills such as Sencha Ext JS, Mule, JDK, JBuilder, JavaScript, Perl, CGI, Swing, Beans, JDBC, Spring, Hibernate, ATG Dynamo, CORBA, ORBIX, Cold Fusion, EDI and other related technologies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "The GUI Group",
    description: "The GUI Group specializes in Microsoft's Visual Suite technologies for GUI design, namely C#, VB.NET, .NET Framework 4.0, and Visual C++ with MFC. Our experts have experience in programming handheld devices, additional skills in utilities and tools such as Crystal Reports, ODBC, ActiveX, OLE, COM / DCOM.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "The DB Group",
    description: "The DB Group focuses mainly on prevalent and emerging RDBMS, front-end technology, and Data Warehousing. This Group has resources with experience in RDBMS such as Oracle 11g, Sybase, MS-SQL Server 2012, DB2, UDB and Informix under both UNIX and Windows platforms. Data Warehousing group has resources with Informatica, Manhattan, Data Stage, and MDM.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    title: "The AS/400 and Mainframe Group",
    description: "The AS/400-Mainframe Group caters to the need of IBM AS/400 and Mainframe customers, with resources and expertise in COBOL, DB2, CICS, RPG/400, COBOL/400, RPG/ILE, SYNON, JD Edwards, BPCS, and AS/SET etc.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1974&auto=format&fit=crop"
  }
];

export function Services() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
       {/* Creative Banner Header */}
       <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0f172a]">
          {/* Banner Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
          {/* Abstract glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="max-w-4xl mx-auto"
             >
                <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                   Our Expertise
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white drop-shadow-lg">
                   Specialized Technology Groups
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow">
                  We provide tailored solutions through our specialized groups, combining industry expertise with cutting-edge technology to drive your business forward.
                </p>
             </motion.div>
          </div>
       </section>

       <section className="px-4 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-100 flex flex-col"
              >
                  <div className="h-64 sm:h-80 relative overflow-hidden">
                     <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent" />
                     <h3 className="absolute bottom-6 left-8 right-8 text-2xl md:text-3xl font-bold text-white drop-shadow-lg">{service.title}</h3>
                  </div>
                 
                 <div className="p-8 sm:p-10 flex-1 flex flex-col">
                    <p className="text-slate-600 leading-relaxed flex-1 text-base sm:text-lg">
                      {service.description}
                    </p>
                 </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-[#020617] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl"
          >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-transparent" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">QA/BA Group</h3>
                      <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl">
                          We also have a specialized QA/BA Group focused on Rational and Mercury tools to ensure the highest quality deliverables.
                      </p>
                  </div>
                  <Box className="w-16 h-16 text-blue-400 opacity-50 shrink-0" />
              </div>
          </motion.div>
       </section>

       <section className="bg-gradient-to-br from-blue-600 to-emerald-600 py-24 px-4 mt-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
             <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-md">Need a custom solution?</h2>
             <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto drop-shadow">
               Our architects specialize in designing bespoke ecosystem solutions to address your unique market challenges.
             </p>
             <button className="bg-white text-slate-900 rounded-full px-10 py-5 font-bold text-lg hover:scale-105 hover:bg-slate-50 transition-all shadow-xl shadow-black/20">
                Contact our Solution Architects
             </button>
          </div>
       </section>
    </div>
  );
}

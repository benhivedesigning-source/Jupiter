import { motion } from "framer-motion";

const industries = [
  { name: "Financial Services", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { name: "Healthcare & Life Sciences", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" },
  { name: "Manufacturing", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" },
  { name: "Retail & Consumer", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
  { name: "Energy & Utilities", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Technology & Media", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" }
];

export function Industries() {
  return (
    <div className="pt-24 pb-20 bg-background">
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Industries We Serve</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Deep domain expertise paired with technological mastery. We understand the specific regulatory, functional, and market pressures unique to your sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
           {industries.map((ind, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
             >
                <img src={ind.image} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                   <h3 className="text-white text-2xl font-bold mb-2">{ind.name}</h3>
                   <div className="h-1 w-12 bg-blue-500 rounded-full transition-all group-hover:w-full" />
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}

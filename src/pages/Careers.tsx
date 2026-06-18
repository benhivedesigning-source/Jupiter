import { motion } from "framer-motion";
import { ArrowRight, Users, Zap, Award } from "lucide-react";

export function Careers() {
  return (
    <div className="pt-24 pb-20 bg-background">
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Build the Future with Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join a team of brilliant minds solving the world's most complex enterprise challenges. At Jupiter Consulting, your career trajectory is limitless.
            </p>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold hover:bg-primary/90 transition-colors inline-flex items-center">
               View Open Positions <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Jupiter?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We foster an environment of continuous learning, disruptive innovation, and mutual respect.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
           {[
             { icon: <Users className="w-6 h-6"/>, title: "Collaborative Culture", desc: "Work alongside industry veterans and visionary thinkers." },
             { icon: <Zap className="w-6 h-6"/>, title: "Cutting-Edge Tech", desc: "Get hands-on experience with emerging technologies." },
             { icon: <Award className="w-6 h-6"/>, title: "Career Growth", desc: "Comprehensive mentorship and rapid advancement paths." }
           ].map((benefit, i) => (
             <div key={i} className="p-8 rounded-3xl bg-muted/50 border border-border text-center">
                <div className="w-12 h-12 bg-card rounded-xl flex flex-col items-center justify-center mx-auto mb-6 shadow-sm border border-border text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground line-clamp-3">{benefit.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}

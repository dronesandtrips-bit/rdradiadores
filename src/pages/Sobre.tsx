import { useEffect } from "react";
import { Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const pillars = [
  { icon: Target, title: "Missão", desc: "Manter o caminhão do cliente na estrada com segurança e eficiência, com rapidez e preço justo.", color: "text-primary" },
  { icon: Eye, title: "Visão", desc: "Ser a referência em radiadores para caminhões em Caxias do Sul e na Serra Gaúcha.", color: "text-primary" },
  { icon: Heart, title: "Valores", desc: "Honestidade, agilidade, qualidade e compromisso com o cliente.", color: "text-primary" },
];

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre Nós | RD Radiadores — Especialistas em Caminhões Caxias do Sul";
  }, []);

  return (
    <main>
      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-secondary-foreground mb-4">
              Sobre a <span className="text-primary">RD Radiadores</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80" alt="Equipe RD Radiadores" className="w-full h-72 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663382812294/jLJJeflXMdzpsThu.webp" alt="Radiador de caminhão" className="w-full h-48 object-cover" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="industrial-border pl-6">
                <h2 className="font-heading text-2xl md:text-4xl font-black uppercase text-foreground mb-6">Nossa História</h2>
                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                  <p>A RD Radiadores é uma empresa especializada em conserto e venda de radiadores para caminhões em Caxias do Sul - RS. Nascemos da paixão pelo setor de transporte e da necessidade de oferecer um serviço de qualidade, rápido e confiável para caminhoneiros e transportadoras da Serra Gaúcha.</p>
                  <p>Sabemos que cada hora de caminhão parado representa prejuízo para o motorista e para a empresa. Por isso, trabalhamos com agilidade sem abrir mão da qualidade. Nossa equipe técnica é formada por profissionais experientes e especializados em sistema de arrefecimento de linha pesada.</p>
                  <p>Atendemos caminhoneiros autônomos, pequenas transportadoras e grandes frotas, sempre com o mesmo comprometimento: fazer o serviço certo, na primeira vez.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-muted section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-foreground mb-4">Nossos Pilares</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.15}>
                <motion.div whileHover={{ y: -6, scale: 1.02 }} className="bg-card p-8 rounded-lg border border-border text-center h-full shadow-lg">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <p.icon className={`w-8 h-8 ${p.color}`} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3 uppercase">{p.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{p.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;

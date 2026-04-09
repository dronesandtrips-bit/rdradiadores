import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Clock, Wrench, Shield, Zap, Settings, ClipboardList, Factory, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const heroChild = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const reasons = [
  {
    icon: Truck,
    title: "Especialistas em Linha Pesada",
    desc: "Foco total em caminhões, carretas e rodotrens. Conhecemos cada modelo e aplicação.",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    desc: "Caminhão parado é prejuízo. Agilidade no diagnóstico e na execução do serviço.",
  },
  {
    icon: Settings,
    title: "Peças de Qualidade",
    desc: "Radiadores novos e recondicionados com procedência garantida e compatibilidade verificada.",
  },
  {
    icon: Users,
    title: "Equipe Experiente",
    desc: "Técnicos especializados com anos de experiência em sistema de arrefecimento de linha pesada.",
  },
  {
    icon: Factory,
    title: "Atendimento a Frotas",
    desc: "Contratos especiais para transportadoras e empresas com frota de caminhões.",
  },
  { icon: ClipboardList, title: "Garantia por Escrito", desc: "Todo serviço realizado sai com garantia documentada." },
];

const services = [
  {
    title: "Conserto de Radiadores",
    desc: "Diagnóstico completo e reparo de vazamentos, trincas e entupimentos.",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
    icon: Wrench,
  },
  {
    title: "Venda de Radiadores",
    desc: "Estoque de radiadores novos e recondicionados para as principais marcas.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    icon: Settings,
  },
  {
    title: "Limpeza e Manutenção",
    desc: "Manutenção preventiva que evita paradas inesperadas e prolonga a vida do motor.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80",
    icon: Zap,
  },
  {
    title: "Conserto de Intercooler",
    desc: "Diagnóstico, reparo e substituição de intercoolers para caminhões pesados.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    icon: Settings,
  },
  {
    title: "Reparo de Vazamentos",
    desc: "Identificação e reparo preciso de vazamentos com teste de pressão.",
    image: "https://images.unsplash.com/photo-1596113199003-03babc2bdd2b?w=600&q=80",
    icon: Shield,
  },
  {
    title: "Check-up Completo",
    desc: "Revisão completa do sistema de arrefecimento com laudo técnico.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    icon: ClipboardList,
  },
];

const brands = ["Volvo", "Scania", "Mercedes-Benz", "Iveco", "DAF", "MAN", "Ford Cargo", "Volkswagen", "International"];

const blogPosts = [
  {
    title: "5 sinais de que o radiador do seu caminhão precisa de manutenção",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    slug: "sinais-manutencao-radiador",
  },
  {
    title: "Radiador novo ou recondicionado: qual escolher?",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    slug: "radiador-novo-ou-recondicionado",
  },
  {
    title: "Por que o superaquecimento pode destruir o motor?",
    image: "https://images.unsplash.com/photo-1609175172941-f9e00ad03e25?w=600&q=80",
    slug: "superaquecimento-motor",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "RD Radiadores — Conserto e Venda de Radiadores de Caminhão em Caxias do Sul";
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80"
            alt="Caminhão na estrada"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          />
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 container mx-auto px-4 text-center max-w-4xl"
        >
          <motion.h1
            variants={heroChild}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-secondary-foreground uppercase leading-tight mb-6"
          >
            Seu caminhão não pode parar. <span className="text-primary">A gente garante isso.</span>
          </motion.h1>
          <motion.p
            variants={heroChild}
            className="text-secondary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body leading-relaxed"
          >
            Especialistas em conserto e venda de radiadores para caminhões em Caxias do Sul. Atendimento rápido,
            diagnóstico preciso e garantia no serviço.
          </motion.p>
          <motion.div variants={heroChild} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://api.whatsapp.com/send?phone=555499723827"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded font-heading font-bold text-lg uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(209_100%_38%/0.4)]"
            >
              Solicitar Orçamento Agora
            </a>
            <Link
              to="/servicos"
              className="border-2 border-secondary-foreground/50 text-secondary-foreground px-8 py-4 rounded font-heading font-bold text-lg uppercase tracking-wider hover:bg-secondary-foreground/10 transition-colors duration-300"
            >
              Ver Nossos Serviços
            </Link>
          </motion.div>
          <motion.div variants={heroChild} className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "🔧", text: "Diagnóstico Gratuito" },
              { icon: "⚡", text: "Atendimento Rápido" },
              { icon: "✅", text: "Garantia no Serviço" },
            ].map((badge) => (
              <span
                key={badge.text}
                className="bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-body"
              >
                {badge.icon} {badge.text}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-secondary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* POR QUE */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-foreground mb-4">
              Por que escolher a <span className="text-primary">RD Radiadores?</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300 h-full"
                >
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <r.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-foreground mb-4">
              Nossos Serviços em <span className="text-primary">Caxias do Sul</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} title={s.title} description={s.desc} image={s.image} icon={s.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA BANNER */}
      <section className="bg-urgency section-padding relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-urgency-foreground mb-4">
              Caminhão superaquecendo? Não perca tempo!
            </h2>
            <p className="text-urgency-foreground/90 max-w-2xl mx-auto mb-8 text-lg font-body leading-relaxed">
              O superaquecimento do motor pode causar danos irreversíveis e prejuízos de dezenas de milhares de reais.
              Entre em contato agora e resolva antes que piore.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=555499723827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-foreground text-secondary px-8 py-4 rounded font-heading font-bold text-lg uppercase tracking-wider hover:bg-secondary-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com especialista agora
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* MARCAS */}
      <section className="bg-secondary section-padding overflow-hidden">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-secondary-foreground mb-2">
              Marcas que <span className="text-primary">Atendemos</span>
            </h2>
            <p className="text-secondary-foreground/60 mb-10 font-body">
              Trabalhamos com todos os principais fabricantes de caminhões pesados
            </p>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-secondary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-secondary to-transparent z-10" />
            <div className="flex animate-marquee gap-6">
              {[...brands, ...brands, ...brands].map((brand, i) => (
                <div
                  key={`${brand}-${i}`}
                  className="bg-secondary-foreground/5 border border-secondary-foreground/20 rounded-lg px-6 py-4 flex items-center gap-3 cursor-default flex-shrink-0 hover:border-primary/50 transition-colors duration-300"
                >
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="font-heading text-lg font-bold text-secondary-foreground whitespace-nowrap">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-foreground mb-4">
              Dicas e Informações para <span className="text-primary">Caminhoneiros</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg group border border-border"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs text-muted-foreground font-body">Março 2026</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-2 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-heading text-sm font-bold text-primary uppercase tracking-wider hover:text-accent transition-colors"
                  >
                    Leia mais →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80"
            alt="Rodovia com caminhão"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="relative z-10 container mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-secondary-foreground mb-4">
              Pronto para resolver o problema do seu caminhão?
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-8 text-lg font-body leading-relaxed">
              Atendemos caminhoneiros autônomos, transportadoras e frotas em Caxias do Sul e região da Serra Gaúcha.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send?phone=555499723827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-heading font-bold text-lg uppercase tracking-wider hover:bg-accent transition-all duration-300 hover:shadow-[0_0_40px_hsl(209_100%_38%/0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento Gratuito
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Index;

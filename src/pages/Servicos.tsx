import { useEffect } from "react";
import { Wrench, Settings, Zap, Shield, ClipboardList, Search } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Conserto e Recuperação de Radiadores",
    image: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    icon: Wrench,
    desc: "O serviço mais procurado. Diagnóstico completo e reparo de vazamentos, trincas, entupimentos e danos estruturais em radiadores de caminhão. Equipamentos modernos para teste de pressão e identificação precisa do problema. Atendemos Volvo, Scania, Mercedes-Benz, Iveco, DAF, MAN, Ford Cargo e outros.",
    items: [
      "Diagnóstico visual e teste de pressão",
      "Reparo de vazamentos e trincas",
      "Substituição de tubos e colmeias",
      "Troca de tampas e conexões",
      "Teste final com garantia",
    ],
  },
  {
    title: "Venda de Radiadores Novos e Seminovos",
    image: "https://manus-user-assets.s3.amazonaws.com/X08t4LyambrV.webp",
    icon: Settings,
    desc: "Estoque de radiadores novos e recondicionados para as principais marcas de caminhões pesados. Peças com procedência garantida e compatibilidade verificada. Agilidade para seu caminhão voltar à estrada o mais rápido possível.",
    items: [
      "Volvo FH/FM/FMX",
      "Scania R/S/P/G",
      "Mercedes Actros/Axor/Atego",
      "Iveco Hi-Way/Stralis/Trakker",
      "DAF XF/XG",
      "MAN TGX/TGS",
      "Ford Cargo",
      "VW Constellation/Meteor",
    ],
  },
  {
    title: "Limpeza e Manutenção do Sistema de Arrefecimento",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
    icon: Zap,
    desc: "Manutenção preventiva evita paradas inesperadas e prolonga a vida do motor. Limpeza completa do radiador, intercooler, mangueiras e componentes do circuito de arrefecimento.",
    items: [
      "Limpeza química e mecânica",
      "Descarbonização interna e externa",
      "Troca do líquido de arrefecimento",
      "Inspeção de mangueiras e tampas",
      "Verificação da ventoinha",
    ],
  },
  {
    title: "Conserto de Intercooler",
    image: "https://manus-user-assets.s3.amazonaws.com/J12AUHBByWxI.webp",
    icon: Settings,
    desc: "O intercooler é peça fundamental para o motor turbinado. Diagnóstico, reparo e substituição de intercoolers para caminhões pesados.",
    items: [
      "Perda de potência",
      "Consumo excessivo de combustível",
      "Fumaça excessiva",
      "Motor engasgando na aceleração",
    ],
  },
  {
    title: "Reparo de Vazamentos",
    image: "https://manus-user-assets.s3.amazonaws.com/eqcK967LjHPb.jpg",
    icon: Shield,
    desc: "Identificação e reparo preciso de vazamentos no sistema de arrefecimento com teste de pressão para localização exata, garantindo solução definitiva.",
    items: ["Vazamento no núcleo do radiador", "Nas caixas d'água", "Em mangueiras e conexões", "Em juntas e vedações"],
  },
  {
    title: "Check-up e Diagnóstico Completo",
    image: "https://manus-user-assets.s3.amazonaws.com/o1iD9C6JkSMa.jpeg",
    icon: ClipboardList,
    desc: "Revisão completa do sistema de arrefecimento com laudo técnico. Ideal para frotas com manutenção preventiva programada.",
    items: [
      "Inspeção visual completa",
      "Teste de pressão",
      "Verificação da temperatura",
      "Análise do líquido",
      "Verificação da bomba d'água e termostato",
      "Emissão de laudo",
    ],
  },
];

const Servicos = () => {
  useEffect(() => {
    document.title = "Serviços | Conserto de Radiador de Caminhão — RD Radiadores Caxias do Sul";
  }, []);

  return (
    <main>
      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-secondary-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto font-body text-lg">
              Conserto de radiadores, limpeza do sistema de arrefecimento, reparo de intercooler e venda de radiadores
              para caminhões em Caxias do Sul - RS.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.title} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <AnimatedSection direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative rounded-lg overflow-hidden shadow-xl group">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>
              </AnimatedSection>
              <AnimatedSection direction={i % 2 === 0 ? "right" : "left"} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="industrial-border pl-6">
                  <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-4xl font-black uppercase text-foreground mb-4">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-body text-foreground">
                        <Search className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=555499723827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-heading font-bold uppercase tracking-wider hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Solicitar Orçamento
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Servicos;

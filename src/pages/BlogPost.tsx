import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const articles: Record<string, { title: string; image: string; content: string[] }> = {
  "sinais-manutencao-radiador": {
    title: "5 sinais de que o radiador do seu caminhão precisa de manutenção",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    content: [
      "O radiador é uma das peças mais importantes do sistema de arrefecimento do caminhão. Quando ele falha, o motor pode superaquecer e causar danos irreversíveis. Confira os 5 sinais de alerta:",
      "1. Temperatura subindo acima do normal — Se o ponteiro do marcador de temperatura está subindo além do habitual, pode indicar problemas no radiador, como entupimento ou vazamento do líquido de arrefecimento. O risco é o superaquecimento do motor, que pode causar empenamento do cabeçote.",
      "2. Líquido de arrefecimento no chão — Manchas verdes, vermelhas ou amarelas embaixo do caminhão indicam vazamento. Pode ser no radiador, nas mangueiras ou nas conexões. Não ignore: o nível baixo de líquido pode fundir o motor.",
      "3. Cheiro de queimado vindo do motor — O líquido de arrefecimento em contato com partes quentes do motor produz um cheiro adocicado e de queimado. Isso é sinal claro de vazamento e exige atenção imediata.",
      "4. Vapor saindo de baixo do capô — Se há vapor saindo do compartimento do motor, pare imediatamente. Isso indica superaquecimento grave e pode causar danos sérios ao motor se você continuar rodando.",
      "5. Perda de potência do motor — O motor que não refrigera corretamente perde potência. Se o caminhão está 'pesado' em subidas ou demora para responder, verifique o sistema de arrefecimento.",
      "Se você identificou algum desses sinais, não espere o problema piorar. Entre em contato com a RD Radiadores pelo WhatsApp (54) 99723-8827 e agende uma revisão completa.",
    ],
  },
  "radiador-novo-ou-recondicionado": {
    title: "Radiador novo ou recondicionado: qual escolher para seu caminhão?",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    content: [
      "Na hora de trocar o radiador do caminhão, surge a dúvida: comprar novo ou recondicionado? A resposta depende de vários fatores.",
      "Radiador Novo: É a melhor opção para caminhões novos ou com alto rodado quilométrico. Oferece maior durabilidade, garantia de fábrica e desempenho original. O custo é mais alto, mas o investimento se paga pela longevidade.",
      "Radiador Recondicionado: Passa por um processo de restauração completo — troca de tubos, limpeza, teste de pressão e pintura. É uma opção com excelente custo-benefício, ideal para situações de emergência ou caminhões mais antigos.",
      "Quando escolher novo? Para caminhões novos ou seminovos, para frotas que precisam de máxima confiabilidade, quando o orçamento permite o investimento a longo prazo.",
      "Quando escolher recondicionado? Para reparos emergenciais em que o caminhão precisa voltar rápido à estrada, para caminhões mais antigos, quando o custo-benefício é prioridade.",
      "Na RD Radiadores, trabalhamos com ambas as opções e ajudamos você a escolher a melhor para o seu caso. Entre em contato pelo WhatsApp (54) 99723-8827.",
    ],
  },
  "superaquecimento-motor": {
    title: "Por que o superaquecimento pode destruir o motor do seu caminhão?",
    image: "https://images.unsplash.com/photo-1609175172941-f9e00ad03e25?w=800&q=80",
    content: [
      "O superaquecimento do motor é um dos problemas mais graves que um caminhão pode enfrentar. Ignorar os sinais pode transformar um reparo de R$ 500 em um prejuízo de R$ 50.000 ou mais.",
      "Danos causados pelo superaquecimento: Juntas do cabeçote fundidas — o calor excessivo deforma as juntas, causando vazamento de fluidos e perda de compressão. Pistões danificados — a dilatação térmica excessiva pode trincar ou emperrar os pistões no cilindro.",
      "Cabeçote trincado — o alumínio do cabeçote não resiste a temperaturas extremas e pode trincar, exigindo substituição completa. Bielas empenadas — em casos extremos, o motor pode fundir completamente.",
      "O custo de um motor fundido: Retífica completa do motor de um caminhão pesado pode custar de R$ 30.000 a R$ 80.000. A manutenção preventiva do radiador custa uma fração disso.",
      "Prevenção: Verifique o nível do líquido de arrefecimento semanalmente. Troque o líquido na periodicidade recomendada. Faça check-up do sistema de arrefecimento a cada 50.000 km. Não ignore sinais de aquecimento anormal.",
      "Não arrisque! Se a temperatura do motor subiu, pare imediatamente e entre em contato com a RD Radiadores: WhatsApp (54) 99723-8827.",
    ],
  },
  "manutencao-preventiva-frotas": {
    title: "Manutenção preventiva do arrefecimento: guia completo para frotas",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    content: [
      "Para frotas de caminhões, a manutenção preventiva do sistema de arrefecimento é essencial para evitar paradas inesperadas e manter a operação funcionando.",
      "Checklist de manutenção preventiva: Verificação visual do radiador (vazamentos, amassados, corrosão). Teste de pressão do sistema. Análise do líquido de arrefecimento (concentração e pH). Inspeção de mangueiras, braçadeiras e conexões. Verificação da ventoinha e embreagem viscosa.",
      "Periodicidade recomendada: A cada 30.000 km — inspeção visual e verificação do nível. A cada 50.000 km — check-up completo com teste de pressão. A cada 100.000 km — troca do líquido de arrefecimento. A cada 200.000 km — avaliação da necessidade de troca do radiador.",
      "Custos versus benefícios: Uma manutenção preventiva completa custa entre R$ 200 e R$ 800. Um motor fundido por falta de manutenção pode custar mais de R$ 50.000, sem contar o lucro cessante do caminhão parado.",
      "Programa de manutenção para frotas: Na RD Radiadores, oferecemos contratos especiais para frotas com condições diferenciadas, agendamento programado e atendimento prioritário.",
      "Quer implementar um programa de manutenção preventiva para sua frota? Fale com a RD Radiadores pelo WhatsApp (54) 99723-8827.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articles[slug] : null;

  useEffect(() => {
    if (article) document.title = `${article.title} — RD Radiadores`;
  }, [article]);

  if (!article) {
    return (
      <main className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-primary font-heading font-bold uppercase hover:text-accent transition-colors">← Voltar ao Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedSection className="text-center px-4 max-w-3xl">
            <h1 className="font-heading text-2xl md:text-4xl font-black uppercase text-secondary-foreground leading-tight">{article.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="text-primary font-heading font-bold uppercase text-sm hover:text-accent transition-colors mb-8 inline-block">← Voltar ao Blog</Link>
          <div className="space-y-6">
            {article.content.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <p className="text-foreground font-body leading-relaxed text-lg">{p}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-12 bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
            <p className="font-heading text-xl font-bold text-foreground mb-4">Precisa de ajuda com o radiador do seu caminhão?</p>
            <a
              href="https://api.whatsapp.com/send?phone=5554997238827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-bold uppercase tracking-wider hover:bg-accent transition-colors"
            >
              Falar com especialista
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;

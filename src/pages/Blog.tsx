import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    slug: "sinais-manutencao-radiador",
    title: "5 sinais de que o radiador do seu caminhão precisa de manutenção",
    excerpt: "Temperatura subindo? Líquido no chão? Saiba identificar os sinais antes que o problema fique grave.",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    date: "15 Mar 2026",
  },
  {
    slug: "radiador-novo-ou-recondicionado",
    title: "Radiador novo ou recondicionado: qual escolher para seu caminhão?",
    excerpt: "Compare custo, durabilidade e garantia entre radiadores novos e recondicionados.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    date: "10 Mar 2026",
  },
  {
    slug: "superaquecimento-motor",
    title: "Por que o superaquecimento pode destruir o motor do seu caminhão?",
    excerpt: "Entenda os danos irreversíveis do superaquecimento e como prevenir.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80",
    date: "05 Mar 2026",
  },
  {
    slug: "manutencao-preventiva-frotas",
    title: "Manutenção preventiva do arrefecimento: guia completo para frotas",
    excerpt: "Checklist de manutenção preventiva e como implementar um programa eficiente.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    date: "01 Mar 2026",
  },
];

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Dicas sobre Radiadores de Caminhão — RD Radiadores Caxias do Sul";
  }, []);

  return (
    <main>
      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-secondary-foreground mb-4">
              <span className="text-primary">Blog</span> RD Radiadores
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto font-body text-lg">
              Dicas de manutenção e cuidados com o sistema de arrefecimento de caminhões.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-background section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg group border border-border"
              >
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                  <h2 className="font-heading text-xl font-bold text-foreground mt-2 mb-3 leading-tight">{post.title}</h2>
                  <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="font-heading text-sm font-bold text-primary uppercase tracking-wider hover:text-accent transition-colors">
                    Leia mais →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;

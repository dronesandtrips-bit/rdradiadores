import { useEffect, useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", modelo: "", problema: "" });

  useEffect(() => {
    document.title = "Contato | RD Radiadores — Radiadores de Caminhão em Caxias do Sul";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. Empresa: ${form.empresa || "N/A"}. Telefone: ${form.telefone}. Modelo: ${form.modelo}. Problema: ${form.problema}`;
    window.open(`https://api.whatsapp.com/send?phone=555499723827&text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main>
      <section className="bg-secondary section-padding">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-secondary-foreground mb-4">
              Fale com a <span className="text-primary">RD Radiadores</span>
            </h1>
            <p className="text-secondary-foreground/70 font-body text-lg">em Caxias do Sul</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Endereço</h3>
                      <p className="text-muted-foreground text-sm font-body">
                        Rodovia BR 116, km 147, nº 15650 — Bairro De Lazzer, Caxias do Sul - RS, CEP 95059-520
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Telefone</h3>
                      <a
                        href="tel:+555430274305"
                        className="text-primary text-sm font-body hover:text-accent transition-colors"
                      >
                        (54) 3027-4305
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground">WhatsApp</h3>
                      <a
                        href="https://api.whatsapp.com/send?phone=555499723827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm font-body hover:text-accent transition-colors"
                      >
                        (54) 99723-8827
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Horário</h3>
                      <p className="text-muted-foreground text-sm font-body">
                        Seg–Sex 08:00–17:30 | Sábado 08:00–12:00 | Domingo Fechado
                      </p>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="https://api.whatsapp.com/send?phone=555499723827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-whatsapp text-whatsapp-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg uppercase tracking-wider w-full hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Chamar no WhatsApp
                </motion.a>

                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                  <iframe
                    src="https://maps.google.com/maps?q=-29.1375,-51.1485&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização RD Radiadores"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="font-heading text-2xl font-black uppercase text-foreground mb-6">Solicitar Orçamento</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "nome", label: "Nome *", placeholder: "Seu nome completo", required: true },
                    { key: "empresa", label: "Empresa / Frota", placeholder: "Nome da empresa (opcional)" },
                    { key: "telefone", label: "Telefone *", placeholder: "(54) 99999-9999", required: true },
                    { key: "modelo", label: "Modelo do Caminhão *", placeholder: "Ex: Scania R450", required: true },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-heading font-bold text-foreground mb-1">{field.label}</label>
                      <input
                        type="text"
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 border border-input rounded bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-heading font-bold text-foreground mb-1">
                      Problema Relatado *
                    </label>
                    <textarea
                      placeholder="Descreva o problema do radiador..."
                      required
                      rows={4}
                      value={form.problema}
                      onChange={(e) => setForm({ ...form, problema: e.target.value })}
                      className="w-full px-4 py-3 border border-input rounded bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded font-heading font-bold text-lg uppercase tracking-wider hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Orçamento
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;

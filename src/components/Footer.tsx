import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logoradiador.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground/80">
    <div className="container mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-4">
            <img src={logo} alt="RD Radiadores" className="h-[70px] w-auto" style={{ filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.6))" }} />
          </div>
          <p className="text-sm leading-relaxed">
            Especialistas em radiadores para caminhões em Caxias do Sul e Serra Gaúcha.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-secondary-foreground mb-4 uppercase tracking-wider">Menu</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Serviços", path: "/servicos" },
              { label: "Sobre Nós", path: "/sobre" },
              { label: "Blog", path: "/blog" },
              { label: "Contato", path: "/contato" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-sm hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-secondary-foreground mb-4 uppercase tracking-wider">Contato</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+555430274305" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" /> (54) 3027-4305
            </a>
            <a href="https://api.whatsapp.com/send?phone=5554997238827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4 text-primary" /> (54) 99723-8827
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>Rodovia BR 116, km 147, nº 15650 — Bairro De Lazzer, Caxias do Sul - RS</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Seg–Sex 08h–17h30 | Sáb 08h–12h</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-lg font-bold text-secondary-foreground mb-4 uppercase tracking-wider">Horário</h4>
          <div className="text-sm space-y-2">
            <div className="flex justify-between"><span>Segunda – Sexta</span><span className="text-primary">08:00 – 17:30</span></div>
            <div className="flex justify-between"><span>Sábado</span><span className="text-primary">08:00 – 12:00</span></div>
            <div className="flex justify-between"><span>Domingo</span><span className="text-destructive">Fechado</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10 py-6 text-center text-xs text-secondary-foreground/50">
      © {new Date().getFullYear()} RD Radiadores — Caxias do Sul, RS. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;

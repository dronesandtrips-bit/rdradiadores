import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Serviços", path: "/servicos" },
  { label: "Sobre Nós", path: "/sobre" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-secondary text-secondary-foreground sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-secondary px-3 py-1 rounded">
            <span className="font-heading text-3xl font-black text-primary tracking-tight">RD</span>
            <span className="block font-heading text-xs text-secondary-foreground tracking-[0.3em] uppercase -mt-1">Radiadores</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 font-body text-sm uppercase tracking-wider transition-colors duration-300 rounded hover:text-primary ${
                location.pathname === item.path ? "text-primary font-bold" : "text-secondary-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://api.whatsapp.com/send?phone=5554997238827"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded font-heading font-bold text-sm uppercase tracking-wider hover:bg-accent transition-colors duration-300"
        >
          Solicitar Orçamento
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-secondary-foreground p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-body text-sm uppercase tracking-wider transition-colors rounded hover:bg-secondary-foreground/10 ${
                    location.pathname === item.path ? "text-primary font-bold" : "text-secondary-foreground/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=5554997238827"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 rounded font-heading font-bold text-sm uppercase tracking-wider text-center mt-2 hover:bg-accent transition-colors"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

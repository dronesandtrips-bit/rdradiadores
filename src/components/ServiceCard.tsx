import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  index: number;
}

const ServiceCard = ({ title, description, image, icon: Icon, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-border"
  >
    <div className="relative h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
      <div className="absolute bottom-3 left-3 bg-primary rounded-full p-2.5">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      <Link to="/servicos" className="font-heading text-sm font-bold text-primary uppercase tracking-wider hover:text-accent transition-colors inline-flex items-center gap-1 group/link">
        Saiba mais
        <motion.span className="inline-block" whileHover={{ x: 4 }}>→</motion.span>
      </Link>
    </div>
  </motion.div>
);

export default ServiceCard;

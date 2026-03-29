import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://api.whatsapp.com/send?phone=5554997238827"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground rounded-full p-4 shadow-xl hover:scale-110 transition-transform duration-300 animate-pulse-glow flex items-center gap-2"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-7 h-7 fill-current" />
    <span className="hidden sm:inline font-heading font-bold text-sm uppercase tracking-wider pr-1">Orçamento</span>
  </motion.a>
);

export default WhatsAppButton;

import { Wrench } from "lucide-react";

const UrgencyBanner = () => (
  <div className="bg-urgency text-urgency-foreground py-2 px-4 text-center text-sm font-body z-50 relative">
    <div className="container mx-auto flex items-center justify-center gap-2 flex-wrap">
      <Wrench className="w-4 h-4" />
      <span>Caminhão parado? Ligue agora:</span>
      <a href="tel:+555430274305" className="font-bold underline hover:opacity-80 transition-opacity">(54) 3027-4305</a>
      <span className="hidden sm:inline">|</span>
      <span>WhatsApp:</span>
      <a href="https://api.whatsapp.com/send?phone=555499723827" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:opacity-80 transition-opacity">(54) 99723-8827</a>
    </div>
  </div>
);

export default UrgencyBanner;

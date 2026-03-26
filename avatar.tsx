import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hi, I'd like to know more about your IT services." }: WhatsAppButtonProps) => {
  // Remove any non-numeric characters from phone number
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-50" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0B1222] text-white text-sm px-4 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[rgba(244,247,255,0.1)]">
        Chat on WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-[#0B1222] rotate-45 border-r border-t border-[rgba(244,247,255,0.1)]" />
      </div>
    </a>
  );
};

export default WhatsAppButton;

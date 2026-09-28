import { waLink } from "@/lib/contact";

type Props = {
  message: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-soft shadow-lg shadow-terracotta/25",
  secondary: "bg-cream text-ink border border-cream-deep hover:border-gold hover:bg-white",
  ghost: "bg-transparent text-ink border border-ink/20 hover:border-terracotta hover:text-terracotta",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebe57] shadow-lg shadow-ink/10",
};

export default function WhatsAppButton({
  message,
  children,
  className = "",
  variant = "whatsapp",
}: Props) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

import Link from "next/link";

type Props = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function CTABlog({
  title = "Vous avez des questions sur votre situation ?",
  subtitle = "Premier rendez-vous gratuit · Réponse sous 24h",
  buttonText = "Parler à Joël →",
  buttonHref = "/#contact",
}: Props) {
  return (
    <div className="my-8 rounded-2xl bg-[#00B6DE] px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 not-prose">
      <div>
        <p className="text-white font-bold text-lg leading-snug">{title}</p>
        <p className="text-white/80 text-sm mt-1">{subtitle}</p>
      </div>
      <Link
        href={buttonHref}
        className="inline-flex items-center bg-white text-[#00B6DE] hover:bg-[#e0f7fd] font-bold text-sm px-6 py-3 rounded-full transition-colors flex-shrink-0"
      >
        {buttonText}
      </Link>
    </div>
  );
}

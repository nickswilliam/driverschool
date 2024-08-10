import Link from "next/link";

interface LinksToPayTypes {
  title: string;
  href: string;
}

const LinksToPay = ({ title, href }: LinksToPayTypes) => {
  const priceIndex = title.lastIndexOf("$");
  return (
    <Link
      href={href}
      className="w-full bg-indigo-900 py-4 px-8 text-xl font-semibold rounded-sm text-violet-100 hover:bg-indigo-950 text-center shadow-md transition-colors duration-100"
      title={title}
    >
      {title.substring(0, priceIndex)}
      <span className="text-pink-400">{title.substring(priceIndex)}</span>
    </Link>
  );
};

export default LinksToPay;

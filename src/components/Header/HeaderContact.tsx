"use client";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const HeaderContact = () => {
  const path = usePathname();

  return path?.includes("/panel/admin/user") ? null : (
    <header className="bg-blue-800 flex items-baseline justify-center md:flex-row md:h-12 md:justify-end px-2 sm:px-10 py-2 gap-4 w-full z-40 relative">
      <p className="text-violet-100 text-center hidden sm:block">
        Contactanos:
      </p>

      <a
        href="tel:+541122334455"
        className="text-pink-400 flex items-center gap-1 justify-center"
      >
        <span className="text-violet-100">Tel:</span> 1122334455
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=541122334455"
        className="flex gap-1 items-center justify-center text-violet-100 bg-green-600 px-2 py-1 rounded-md"
      >
        <FaWhatsapp className="text-violet-100 h-4 w-4" />
        Whatsappeanos
      </a>
    </header>
  );
};

export default HeaderContact;

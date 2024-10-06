import { FaRegUser } from "react-icons/fa";

export const AvatarIcon = ({ handleLogout }: { handleLogout: () => void }) => {
  return (
    <button
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-zinc-300 hover:from-cyan-600 hover:to-zinc-400 transition-colors duration-100  mx-auto flex items-center justify-center"
      onClick={handleLogout}
    >
      <FaRegUser className="text-sky-950 pointer-events-none" />
    </button>
  );
};

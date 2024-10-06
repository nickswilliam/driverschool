"use client";
import { IoIosNotifications } from "react-icons/io";

interface QuantityType {
  quantityNotif: number;
  handleNotifications: ()=> void;
}

export const NotificationIcon = ({ quantityNotif,handleNotifications }: QuantityType) => {
  return (
    <div className="mt-1 relative cursor-pointer">
      <button onClick={handleNotifications}>
        <IoIosNotifications
          size={30}
          className="text-cyan-700 hover:text-cyan-800 transition-colors duration-100 relative z-10"
        />
        {quantityNotif >= 0 && (
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-sm bg-pink-700 border border-slate-100 z-20 text-center flex items-center justify-center">
            <span
              className={`text-gray-100 text-[15px] ${
                quantityNotif > 10 && "text-[10px]"
              }`}
            >
              {quantityNotif > 10 ? "+10" : quantityNotif}
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

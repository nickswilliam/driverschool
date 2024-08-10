"use client";
import { IoHomeSharp, IoMailUnread } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaListUl, FaBars, FaTrash } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

import { LeftItem } from "./LeftItem";
import { leftItemsList } from "@/data/dasboard-left-items";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { LeftItemMini } from "./LeftItemMini";

export const DashboardLeftPanel = () => {
  const { data: session } = useSession();
  const [toggleLeftMenu, settoggleLeftMenu] = useState(false);
  const handleToggle = () => settoggleLeftMenu((prev) => !prev);
  return (
    <aside className="relative top-0 bg-slate-100 md:bg-slate-200 w-full max-w-full md:max-w-[300px] h-14 md:min-h-[100vh] border-b md:border-none py-2 px-2 shadow-none md:shadow-lg shrink flex flex-col">
      <button onClick={handleToggle}>
        <FaBars className="block md:hidden ml-3 my-1" size={30} />
      </button>

      {/* container left list items */}
      <div
        className={`z-10 w-[80%] md:max-w-[300px] space-y-2 md:block ${
          toggleLeftMenu ? "block" : "hidden"
        } absolute h-screen left-0 top-14 overflow-x-hidden overflow-y-auto flex-grow bg-slate-100 md:bg-transparent md:w-full px-2 py-4`}
      >
        {leftItemsList.map(({ id, href, title }) => (
          <LeftItem key={id} title={title} href={href}>
            {id === 1 ? (
              <IoHomeSharp />
            ) : id === 2 ? (
              <AiFillDollarCircle />
            ) : id === 3 ? (
              <FaListUl />
            ) : (
              <IoMailUnread />
            )}
          </LeftItem>
        ))}

        {session?.user.role !== "user" && (
          <>
            <LeftItemMini
              href="/panel/admin/user/dashboard/mails/trash"
              title="Papelera"
            >
              <FaTrash />
            </LeftItemMini>

            <LeftItemMini
              href="/panel/admin/user/dashboard/mails/reply"
              title="Enviados"
            >
              <MdOutgoingMail />
            </LeftItemMini>
          </>
        )}
      </div>
      {toggleLeftMenu && (
        <div
          className="md:hidden w-full bg-black/50 h-screen absolute left-0 top-14 z-0"
          onClick={handleToggle}
        ></div>
      )}
    </aside>
  );
};

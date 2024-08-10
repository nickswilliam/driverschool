"use client";
import { useState } from "react";

import { LuPanelLeftOpen } from "react-icons/lu";
import { NotificationIcon } from "../NotificationIcon/NotificationIcon";
import { AvatarIcon } from "../AvatarIcon/AvatarIcon";
import { NotificationItems } from "../NotificationItems/NotificationItems";

import { LogoutModal } from "../LogoutModal/LogoutModal";
import { FetchEmailsClient } from "../FetchEmailsClient/FetchEmailsClient";
import { emailsUrl } from "@/data/fetchLinks";

export const DashboardHeader = () => {
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [toggleLogout, setToggleLogout] = useState(false);
  
  const emailList = FetchEmailsClient(emailsUrl)

  const handleNotifications = () => {
    if (toggleLogout) setToggleLogout((prev) => !prev);

    setToggleNotifications((prev) => !prev);
  };

  const handleLogout = () => {
    if (toggleNotifications) setToggleNotifications((prev) => !prev);
    setToggleLogout((prev) => !prev);
  };

  const mailsFilter = emailList?.filter(item=> !item.isReaded && !item.isTrash)


  return (
    <header className="z-20 px-5 sm:px-10 py-6 flex w-full h-16 bg-slate-100 items-center justify-between shadow-md border-b md:border-none relative">
      <span className="font-bold text-xl md:text-2xl text-cyan-700 flex gap-2 items-center">
        <LuPanelLeftOpen /> MC Panel
      </span>

      {/* nav links - logout & notifications */}
      <nav>
        <ul className="flex gap-10 items-center">
          <li>
            <NotificationIcon
              quantityNotif={mailsFilter?.length || 0}
              handleNotifications={handleNotifications}
            />

            {toggleNotifications && <NotificationItems />}
          </li>

          <li className="cursor-pointer ">
            <AvatarIcon handleLogout={handleLogout} />
            {toggleLogout && <LogoutModal />}
          </li>
        </ul>

        {toggleNotifications && (
          <div
            className="z-30 absolute top-0 left-0 w-full h-screen bg-transparent"
            onClick={handleNotifications}
          ></div>
        )}
      </nav>
    </header>
  );
};

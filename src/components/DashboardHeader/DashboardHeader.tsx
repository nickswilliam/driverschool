"use client";
import { useEffect, useRef, useState } from "react";

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

  const logoutRef = useRef<HTMLDivElement | null>(null);
  const notificationsRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (event: MouseEvent) => {
    if (
      notificationsRef.current &&
      !notificationsRef.current.contains(event.target as Node)
    ) {
      setToggleNotifications(false);
    }

    if(logoutRef.current && !logoutRef.current.contains(event.target as Node)){
      setToggleLogout(false)
    }
  };


  const emailList = FetchEmailsClient(emailsUrl);

  const handleNotifications = () => {
    if (toggleLogout) setToggleLogout((prev) => !prev);

    setToggleNotifications((prev) => !prev);
  };

  const handleLogout = () => {
    if (toggleNotifications) setToggleNotifications((prev) => !prev);
    setToggleLogout((prev) => !prev);
  };

  const mailsFilter = emailList?.filter((item) => !item.isReaded);

  useEffect(() => {
    if (toggleNotifications || toggleLogout) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);

    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [toggleNotifications, toggleLogout]);

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

            {toggleNotifications && (
              <NotificationItems notificationsRef={notificationsRef} />
            )}
          </li>

          <li className="cursor-pointer ">
            <AvatarIcon handleLogout={handleLogout} />
            {toggleLogout && <LogoutModal logoutRef={logoutRef} />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

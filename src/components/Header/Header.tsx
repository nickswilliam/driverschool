"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaBars, FaAngleDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { pathsWithBg } from "@/lib/utils";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const handleMenu = () => setIsDropDown((prev) => !prev);
  const toggleMenu = () => setToggle((prev) => !prev);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const path = usePathname();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    if (!toggle) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth > 1024 && toggle) {
        setToggle(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [toggle]);

  return path?.includes("/panel/admin/user") ? null : (
    <header
      className={`transition-all ease-in delay-200 ${
        scrolling && "bg-violet-700/90 backdrop-blur-md"
      }, ${
        pathsWithBg.some((item) => item === path)
          ? "bg-violet-700 backdrop-blur-md"
          : "bg-transparent"
      } flex w-full h-16 justify-between items-center px-8 md:px-20 py-2 z-20 sticky top-0`}
    >
      {" "}
      <Link href="/">
        <Image alt="logo-img" src={Logo} height={40} width={40} />
      </Link>
      {/* Header Navs */}
      <nav>
        {/*nav - menu */}
        <ul
          className={`${
            !toggle
              ? "hidden items-center justify-around text-purple-100 font-bold text-xl w-50 lg:gap-16 lg:flex"
              : "flex flex-col items-center justify-around text-center absolute top-0 left-0 bg-violet-100 font-bold rounded-md w-full h-auto text-xl text-gray-600 gap-3 py-8 px-10 z-20 shadow-lg animate__animated animate__fadeInDown animate__faster overflow-y-scroll"
          } `}
        >
          <li
            className="flex lg:hidden text-4xl hover:text-violet-400 transition-all ease-out delay-150 cursor-pointer w-full bg-blue-600 rounded-sm px-4 py-2 
            justify-between items-center mb-4"
            title="Cerrar menu"
            onClick={toggleMenu}
          >
            <div className="flex items-center gap-3">
              <Image src={Logo} width={30} height={30} alt="logo-footer" />
              <div className="flex flex-col justify-center items-start">
                <h4 className="uppercase font-bold text-sm text-pink-400">
                  Motivando
                </h4>
                <h5 className="uppercase font-bold text-sm text-violet-100">
                  Conductoras
                </h5>
              </div>
            </div>
            <AiOutlineClose className="text-violet-100 hover:text-violet-300" />
          </li>

          <li>
            <Link
              href="/"
              className="hover:text-pink-700"
              onClick={() => {
                toggle && setToggle(false);
              }}
            >
              Inicio
            </Link>
          </li>

          {/* Dropdown - Cursos */}
          <li
            className="cursor-pointer relative flex flex-col items-center w-full py-2"
            onMouseEnter={handleMenu}
            onMouseLeave={handleMenu}
            onClick={handleMenu}
          >
            {/* text - cursos */}
            <span className="hover:text-pink-700 flex gap-1 items-center text-center">
              <Link
                href="/courses"
                onClick={() => {
                  toggle && setToggle(false);
                }}
              >
                Cursos
              </Link>
              <FaAngleDown />
            </span>

            {/* Dropdown - menu */}
            {isDropDown && (
              <ul
                className={`${
                  !toggle
                    ? "absolute top-full -left-4 z-30 bg-violet-100 w-[400px] px-8 py-6 rounded-sm shadow-lg flex-col gap-2 mt-0 text-purple-600"
                    : "mt-4 items-center flex flex-col gap-2 py-4 w-full border-t border-pink-500 border-b"
                }`}
              >
                <li className="hover:text-pink-700">
                  <Link
                    href="/courses/car-initial"
                    onClick={() => {
                      toggle && setToggle(false);
                    }}
                  >
                    Practicas de Auto
                  </Link>
                </li>

                <li className="hover:text-pink-700">
                  <Link
                    href="/courses/exam"
                    onClick={() => {
                      toggle && setToggle(false);
                    }}
                  >
                    Examen de Manejo
                  </Link>
                </li>
                <li className="hover:text-pink-700">
                  <Link
                    href="/courses/content"
                    onClick={() => {
                      toggle && setToggle(false);
                    }}
                  >
                    Contenido teórico
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/appoint"
              className="hover:text-pink-700"
              onClick={() => {
                toggle && setToggle(false);
              }}
            >
              Reservar
            </Link>
          </li>
          <li>
            <Link
              href="/payments"
              className="hover:text-pink-700"
              onClick={() => {
                toggle && setToggle(false);
              }}
            >
              Pagos
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-pink-700"
              onClick={() => {
                toggle && setToggle(false);
              }}
            >
              Contacto
            </Link>
          </li>
        </ul>

        <button className="lg:hidden" onClick={toggleMenu}>
          <FaBars className="text-purple-100" size={26} />
        </button>
      </nav>
      {toggle && (
        <div
          className="w-full z-10 bg-slate-900/70 h-screen fixed top-0 left-0"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

/* 





*/

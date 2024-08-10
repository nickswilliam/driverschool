"use client";
import { usePathname } from "next/navigation";
import React from "react";

export const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <>
      <section className="w-full h-5/6 relative pt-6 sm:pt-10 px-5 sm:px-10 flex flex-col items-center">
        <div className="-mt-16 bg-hero-courses w-full h-[350px] absolute top-0 left-0 bg-center-right bg-cover -z-10"></div>

        {/* Container - hero courses */}
        <div className="w-full flex flex-col items-center sm:items-end justify-center py-5 px-5 sm:px-10 relative z-10 gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-pink-100 uppercase font-bold bg-violet-500/70 backdrop-blur-sm px-12 py-2 rounded-md italic sm:text-right animate__animated animate__bounceInDown">
            Nuestros Cursos
          </h1>
          <p className="text-violet-100 text-xl font-semibold drop-shadow-lg text-center animate__animated animate__fadeInRight">
            *Todos nuestros cursos están a cargo de instructoras femeninas.
          </p>
        </div>
        {path === "/courses" && children}
      </section>

      {path !== "/courses" && children}
    </>
  );
};

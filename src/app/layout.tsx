import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import HeaderContact from "@/components/Header/HeaderContact";
import "animate.css";
import Footer from "@/components/Footer/Footer";
import { ModalContextProvider } from "@/context/ModalContext";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "@/components/Providers/Providers";
import { AOSWrapper } from "@/components/AOSWrapper/AOSWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motivando Conductoras",
  description: "Academia de conducir hecha por mujeres para mujeres",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <AuthProvider>
          <AOSWrapper>
            <ChakraProvider>
              <HeaderContact />
              <Header />
              {children}
              <Footer />
            </ChakraProvider>
          </AOSWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}

"use client"
import React, { createContext, useState, useContext } from "react";

interface ModalContextTypes {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextTypes | undefined>(undefined);

export const ModalContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [isModal, setIsModal] = useState(false);

  const values: ModalContextTypes = { isModal, setIsModal };
  return (
    <ModalContext.Provider value={values}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if(!context){
        throw new Error('El hook debe ser utilizado dentro de un provider')
    }
    return context;
}
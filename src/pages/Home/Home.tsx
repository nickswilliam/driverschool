import { FC, ReactNode } from "react";

interface HomeProps {
    children: ReactNode;
}
const Home: React.FC<HomeProps> = ({children}) => {
  return (
    <main className="flex flex-col items-center justify-start">
        {children}
    </main>
  )
}

export default Home
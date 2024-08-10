import { LoginForm } from "@/components/LoginForm/LoginForm";
import { MdAdminPanelSettings } from "react-icons/md";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Dashboard",
  description: "Login users to managment dashboard",
  icons: {
    icon: "/logo-dashboard.png"
  }
};

const LoginPage = async() => {
  const session = await getServerSession(authOptions)
  if(session) redirect("/panel/admin/user/dashboard")
  return (
    <main className="bg-gray-100 w-full h-full min-h-[100vh] flex items-center justify-center p-10">
      <div className="bg-cyan-950/90 max-w-lg w-full flex flex-col justify-around p-10 min-h-[400px] rounded-md shadow-lg gap-6">
        <h1 className="self-center text-gray-100 text-xl font-bold flex gap-1 items-center">
          <MdAdminPanelSettings size={28} />
          ADMIN | Panel
        </h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;

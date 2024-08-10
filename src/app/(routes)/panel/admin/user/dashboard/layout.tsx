import { DashboardContainer } from "@/components/DashboardContainer/DashboardContainer";
import { DashboardFooter } from "@/components/DashboardFooter/DashboardFooter";
import { DashboardHeader } from "@/components/DashboardHeader/DashboardHeader";
import { DashboardLeftPanel } from "@/components/DashboardLeftPanel/DashboardLeftPanel";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Panel principal - MC",
    template: "%s | Dashboard",
  },
  description: "Dashboard page to manage content of 'Motivando Conductoras'",
  icons: {
    icon: "/logo-dashboard.png"
  }
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`bg-gradient-to-tr from-cyan-100 to-gray-300 relative grow ${poppins.className}`}
    >
      <DashboardHeader />
      <DashboardContainer>
        <DashboardLeftPanel />
        <main className="grow w-full overflow-auto">{children}</main>
      </DashboardContainer>
      <DashboardFooter />
    </div>
  );
}

export default layout;

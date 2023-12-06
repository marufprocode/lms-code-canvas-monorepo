import { getTokens } from "@/actions/getTokens";
import { redirect } from "next/navigation";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

export default function PortalAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accessToken } = getTokens();

  if (!accessToken?.value) {
    redirect("/login");
  }

  return (
    <div className="relative h-full flex flex-col">
      <Navbar />
      <Sidebar />
      <div className="lg:pl-[250px] flex-1 h-full border overflow-y-auto">
        <div className="container 2xl:py-8 py-6">
          <div className="h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

import { getTokens } from "@/actions/getTokens";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {accessToken} = getTokens();
  
  if(accessToken?.value){
    redirect('/dashboard')
  }

  return <div className="max-w-screen h-screen mx-auto">{children}</div>;
}

import {LayoutDashboard, Receipt} from "lucide-react";

interface ISidenavItem {
  name: string;
  href?: string;
  icon?:React.ReactNode;
  children?: { name: string; href?: string, icon?:React.ReactNode; }[];
}



export const sidebarNavItems:ISidenavItem[] = [
    {
        name:"Dashboard",
        href:"/dashboard",
        icon: <LayoutDashboard size={16}/>
    },
    {
        name:"Billing",
        icon: <Receipt size={16}/>,
        children:[
            {
                name:"Invoices",
                href:"/dashboard/billing/invoices"
            },
            {
                name:"Estimates",
                href:"/dashboard/billing/estimates"
            }
        ]
    }
]
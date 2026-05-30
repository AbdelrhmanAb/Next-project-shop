import DashboardNavbar from "@/components/dashboard/dashboardNavbar";
import SideBarAdmin from "@/components/dashboard/SideBarAdmin";
import React from "react";

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="bg-secondary flex flex-col gap-8 p-5  min-h-screen items-center" >
        <DashboardNavbar/>


        <div className="ml-20 bg-slate-950 w-4/5 shadow-2xl p-5 border-r border-b rounded-2xl">
        <SideBarAdmin/>

        {children}
    </div>
    </div>
  )
}

export default layout


 

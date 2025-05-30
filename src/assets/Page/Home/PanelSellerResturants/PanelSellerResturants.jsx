import React from "react";
import HomeSellerPanel from "../../../Components/PanelSaller/HomeSellerPanel/HomeSellerPanel";
import { Outlet } from "react-router";
import HomePanel from "../../../Components/PanelSaller/HomeSellerPanel/HomePanel/HomePanel";
import FooterPanel from "../../../Components/PanelSaller/FooterPanel/FooterPanel";

export default function PanelSellerResturants() {
  return (
    <div className="bg-slate-200 relative flex gap-5">
      <HomeSellerPanel />
        <Outlet />
      {/* <div className="absolute bottom-0">
        <FooterPanel />
      </div> */}
    </div>
  );
}

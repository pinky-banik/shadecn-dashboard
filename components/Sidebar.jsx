"use client";

import React, { useState } from "react";

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Nav } from "./ui/nav";
import { Button } from "./ui/button";

import {
  useWindowWidth,
} from "@react-hook/window-size";

const Sidebar = () => {
  const [isCollapsed, setisCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className="relative min-w-[80px] border-r px-7  pb-10 pt-24 ">
      {!mobileWidth && <div className="absolute right-[-20px] top-7">
        <Button
          onClick={() => setisCollapsed(!isCollapsed)}
          variant="secondary"
          className="rounded-full p-2 "
        >
          <ChevronRight />
        </Button>
      </div>}
      <Nav
        isCollapsed={mobileWidth? true: isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Ordrs",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;

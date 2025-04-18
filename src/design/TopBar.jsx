import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutDropdown from "@/components/ui/LogoutDropdown";

import {
  Menu,
  LibraryBig,
  LayoutGrid,
  LifeBuoy,
  MessageSquareText,
  Bell,
  UserRound,
} from "lucide-react";
import logo from "../assets/AfroCentric-logo.png";

const TopBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full h-30 bg-white fixed top-0 left-0 z-50 flex items-center justify-between px-6 text-white pl-50">
      {/* Left side: Icon + Logo */}
      <div className="flex items-center gap-3">
        <Menu className="w-6 h-6 text-black" />
        <img src={logo} alt="AfroCentric Logo" className="h-24" />
      </div>

      {/* Right side: 3x2 buttons */}
      <div className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-2 pr-80">
        <button className="w-10 h-10 bg-white rounded hover:bg-white flex items-center justify-center">
          <LibraryBig className="w-5 h-5 text-black" />
        </button>
        <button className="w-10 h-10 bg-white rounded hover:bg-white flex items-center justify-center">
          <LayoutGrid className="w-5 h-5 text-black" />
        </button>
        <LogoutDropdown
          onLogout={() => (user ? logout() : navigate("/login"))}
        />
        <button className="w-10 h-10 bg-white rounded hover:bg-white flex items-center justify-center">
          <LifeBuoy className="w-5 h-5 text-black" />
        </button>
        <button className="w-10 h-10 bg-white rounded hover:bg-white flex items-center justify-center">
          <Bell className="w-5 h-5 text-black" />
        </button>
        <button className="w-10 h-10 bg-white rounded hover:bg-white flex items-center justify-center">
          <MessageSquareText className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;

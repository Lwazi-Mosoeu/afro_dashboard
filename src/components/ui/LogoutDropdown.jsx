// components/ui/LogoutDropdown.jsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserRound, LogOut as LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";

const LogoutDropdown = ({ onLogout, user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-white">
          <UserRound className="w-5 h-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        {/* Clickable username */}
        <DropdownMenuLabel className="font-normal">
          <Link
            to={`/user/${user?.id}`}
            className="flex flex-col space-y-1 hover:text-gray-600 hover:underline"
          >
            <p className="text-sm font-medium leading-none">{user?.username}</p>
          </Link>
        </DropdownMenuLabel>

        <DropdownMenuItem
          onClick={async () => {
            try {
              await onLogout();
            } catch (error) {
              console.error("Logout failed:", error);
            }
          }}
          className="flex items-center gap-2 text-red-600 focus:bg-red-100"
        >
          <LogOutIcon className="w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LogoutDropdown;

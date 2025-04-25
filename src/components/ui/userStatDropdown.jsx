// src/components/ui/UserStatDropdown.jsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LibraryBig, BarChart2, ClipboardList } from "lucide-react";

const UserStatDropdown = ({
  onNavigateUserStats,
  onNavigateServiceIntervention,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-white">
          <LibraryBig className="w-5 h-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem
          onClick={onNavigateUserStats}
          className="flex items-center gap-2"
        >
          <BarChart2 className="w-4 h-4" />
          User Stats
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={onNavigateServiceIntervention}
          className="flex items-center gap-2"
        >
          <ClipboardList className="w-4 h-4" />
          Service & Intervention
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserStatDropdown;

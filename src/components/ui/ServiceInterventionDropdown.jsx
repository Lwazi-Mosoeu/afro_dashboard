// src/components/ui/ServiceInterventionDropdown.jsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LifeBuoy, ClipboardList } from "lucide-react";

const ServiceInterventionDropdown = ({ onNavigate }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-white">
          <LifeBuoy className="w-5 h-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuItem
          onClick={onNavigate}
          className="flex items-center gap-2"
        >
          <ClipboardList className="w-4 h-4" />
          Service & Intervention
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServiceInterventionDropdown;

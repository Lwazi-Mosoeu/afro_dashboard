// src/components/ui/AfaAnalyticsDropdown.jsx
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LayoutGrid, BarChart2 } from "lucide-react";

const AfaAnalyticsDropdown = ({ onNavigateAfaAnalytics }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-white">
          <LayoutGrid className="w-5 h-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuItem
          onClick={onNavigateAfaAnalytics}
          className="flex items-center gap-2"
        >
          <BarChart2 className="w-4 h-4" />
          AFA Analytics
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AfaAnalyticsDropdown;

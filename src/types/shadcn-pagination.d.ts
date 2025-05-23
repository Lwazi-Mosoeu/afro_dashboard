// src/types/shadcn-pagination.d.ts
import * as React from "react";

declare module "@/components/ui/pagination" {
  export const Pagination: React.FC<{
    className?: string;
    children?: React.ReactNode;
  }>;

  export const PaginationContent: React.FC<{
    className?: string;
    children?: React.ReactNode;
  }>;

  export const PaginationItem: React.FC<{
    className?: string;
    children?: React.ReactNode;
  }>;

  export const PaginationLink: React.FC<{
    className?: string;
    isActive?: boolean;
    size?: "default" | "sm" | "lg";
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
  }>;

  export const PaginationPrevious: React.FC<{
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
  }>;

  export const PaginationNext: React.FC<{
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    href?: string;
  }>;

  export const PaginationEllipsis: React.FC<{
    className?: string;
    children?: React.ReactNode;
  }>;
}

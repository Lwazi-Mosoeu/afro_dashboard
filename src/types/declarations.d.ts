// declarations.d.ts

declare module "@/context/AuthContext" {
  interface AuthContextType {
    user: any;
    loading: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    signUp: (credentials: {
      username: string;
      password: string;
    }) => Promise<boolean>;
    logout: () => Promise<void>;
  }

  export const useAuth: () => AuthContextType;
}

declare module "@/components/ui/card";
declare module "@/components/ui/chart";
declare module "@/components/ui/pagination";
declare module "@/components/ui/table";
declare module "@/components/ui/button";
declare module "@/components/ui/input";
declare module "@/components/ui/form";
declare module "@/components/ui/LogoutDropdown";
declare module "@/components/ui/UserStatDropdown";
declare module "@/components/ui/AfaAnalyticsDropdown";

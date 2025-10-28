import { SessionProvider } from "next-auth/react";
import { CMSHeader } from "@/components/cms/cms-header";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen">
        <CMSHeader />
        {children}
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </SessionProvider>
  );
}

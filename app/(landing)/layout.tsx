import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ScrollToTop from "@/components/scroll-to-top";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}

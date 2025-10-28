"use client";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {};

export default function ScrollToTop({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 200);
    });
  }, []);
  return (
    // a button that appears when the user scrolls down and when clicked, it scrolls to the top of the page
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-10 right-10 z-50 bg-primary text-white rounded-full p-2 hover:bg-primary/90",
        isVisible ? "block" : "hidden"
      )}
    >
      <ArrowUp className="w-4 h-4" />
    </Button>
  );
}

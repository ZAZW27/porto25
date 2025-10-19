"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import LandingSection from "@/components/sections/Landing";
import AboutSection from "@/components/sections/About";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/about") {
      console.log("is this about?")
      const aboutEl = document.getElementById("about");
      if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
    } else {
      const landingEl = document.getElementById("landing");
      if (landingEl) landingEl.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <>
      <LandingSection />
      <AboutSection />
    </>
  );
}

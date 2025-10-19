"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import LandingSection from "@/app/sections/landing/page";
import AboutSection from "@/app/sections/about/page";

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
    <main>
      <LandingSection />
      <AboutSection />
    </main>
  );
}

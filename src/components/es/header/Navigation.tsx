"use client";

import NavLinks from "./NavLinks";
import ToggleNavigation from "./ToggleNavigation";

export default function Navigation() {
  return (
    <>
      <div className="block md:hidden">
        <ToggleNavigation />
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";

const MobileMenus = () => {
  const navItems = (mobile_menu || []).filter(
    (m) => (m.title || "").toLowerCase() !== "wishlist"
  );

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {navItems.map((menu) => (
          <li key={menu.id}>
            <Link href={menu.link}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenus;

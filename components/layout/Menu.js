"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Menu() {
  const routerPath = usePathname();
  useEffect(() => {
    if (routerPath == "/index-rtl-1") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.body.classList.add("rtl-version");
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "";
      document.body.classList.remove("rtl-version");
    }
  });
  return (
    <>
      <ul className="menu_list scroll">
        <li className="dropdown-parrent">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/about">About Us</Link>
        </li>
        <li className="mega-menu-parrent">
          <Link href="/service">Services</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="price">Pricing</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="refund">Refund</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="refund-estimate">Refund Estimate</Link>
        </li>
        <li className="dropdown-parrent">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

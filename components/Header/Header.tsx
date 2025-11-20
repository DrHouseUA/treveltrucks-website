"use client";

import Image from "next/image";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
  ];

  return (
    <header className={css.header}>
      <nav className={css["nav-menu"]}>
        <Image
          src="/logo.svg"
          alt="Travel Trucks Logo"
          width={136}
          height={16}
          className={css.logo}
          onClick={() => {
            router.push("/");
          }}
        />
        <ul className={css["nav-links"]}>
          {navLinks.map(({ href, label }) => (
            <li
              key={href}
              className={`${css["nav-link"]} ${
                pathname === href ? css["active"] : ""
              }`}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

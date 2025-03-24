"use client"

import Image from "next/image";
import styles from "./home.module.css";
import ModeToggle from "@/ui/ThemeButton";

export default function Home() {
  return (
    <div className={styles.body}>
      {/* header */}
      <div className={styles.body}>
        <ModeToggle />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      {/* footer */}
    </div>
  );
}

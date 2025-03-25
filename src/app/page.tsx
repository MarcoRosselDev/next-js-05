/* "use client"
 */
import Image from "next/image";
import styles from "./page.module.css";
import ModeToggle from "@/ui/ThemeButton";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.body}>
      {/* header */}
      <main className={styles.main}>
        <ModeToggle />
        <Image className={ styles.logo } src="/next.svg" alt="Next.js logo" width={280} height={138} priority />
        <Link href="/home">go home</Link>
        <Link href="/cv">cv</Link>
      </main>
      {/* footer */}
    </div>
  );
}

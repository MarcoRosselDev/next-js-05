/* "use client"
 */
import Image from "next/image";
import styles from "./page.module.css";
import ModeToggle from "@/ui/ThemeButton";

export default function Home() {

  return (
    <div className={styles.body}>
      {/* header */}
      <main className={styles.body}>
        <ModeToggle />
        <Image className={ styles.logo } src="/next.svg" alt="Next.js logo" width={280} height={138} priority />
      </main>
      {/* footer */}
    </div>
  );
}

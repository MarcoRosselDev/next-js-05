"use client"

import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Hola mundo</p>
        <Link href="/">go root</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis possimus aliquam expedita sapiente fuga voluptates deserunt quasi eveniet maiores ut alias quas, neque, ipsum repellat nobis illo cum laudantium?
        Aliquam, pariatur quibusdam amet nam possimus esse illum! Natus vero labore debitis, asperiores minus facilis a quas cupiditate expedita quisquam. Ipsam minima pariatur necessitatibus perferendis iure exercitationem blanditiis quasi adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis possimus aliquam expedita sapiente fuga voluptates deserunt quasi eveniet maiores ut alias quas, neque, ipsum repellat nobis illo cum laudantium?
        Aliquam, pariatur quibusdam amet nam possimus esse illum! Natus vero labore debitis, asperiores minus facilis a quas cupiditate expedita quisquam. Ipsam minima pariatur necessitatibus perferendis iure exercitationem blanditiis quasi adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis possimus aliquam expedita sapiente fuga voluptates deserunt quasi eveniet maiores ut alias quas, neque, ipsum repellat nobis illo cum laudantium?
        Aliquam, pariatur quibusdam amet nam possimus esse illum! Natus vero labore debitis, asperiores minus facilis a quas cupiditate expedita quisquam. Ipsam minima pariatur necessitatibus perferendis iure exercitationem blanditiis quasi adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis possimus aliquam expedita sapiente fuga voluptates deserunt quasi eveniet maiores ut alias quas, neque, ipsum repellat nobis illo cum laudantium?
        Aliquam, pariatur quibusdam amet nam possimus esse illum! Natus vero labore debitis, asperiores minus facilis a quas cupiditate expedita quisquam. Ipsam minima pariatur necessitatibus perferendis iure exercitationem blanditiis quasi adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis possimus aliquam expedita sapiente fuga voluptates deserunt quasi eveniet maiores ut alias quas, neque, ipsum repellat nobis illo cum laudantium?
        Aliquam, pariatur quibusdam amet nam possimus esse illum! Natus vero labore debitis, asperiores minus facilis a quas cupiditate expedita quisquam. Ipsam minima pariatur necessitatibus perferendis iure exercitationem blanditiis quasi adipisci.</p>
      </main>
  );
}

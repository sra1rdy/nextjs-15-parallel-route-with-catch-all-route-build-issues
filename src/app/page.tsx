import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            <Link href="/slot-with-dynamic-route/broken" style={{ textDecoration: "underline" }}>
              Parallel Broken
            </Link>
          </li>

          <li><Link href="/slot-without-child-route" style={{ textDecoration: "underline" }}>
            Parallel Working
          </Link></li>
        </ol>
      </main>
    </div>
  );
}

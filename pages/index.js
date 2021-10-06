
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dji">
            <a>Dji (Wall Street)</a>
          </Link>
        </li>
        <li>
          <Link href="/dax">
            <a>Dax (Germany 40)</a>
          </Link>
        </li>
        <li>
          <Link href="/nasdaq">
            <a>Nasdaq (US-TECH 100)</a>
          </Link>
        </li>
      </ul>
      <div className={styles.container}>HOME</div>
    </div>
  );
}

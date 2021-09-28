import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dji">
            <a>Dji (wall street)</a>
          </Link>
        </li>
        <li>
          <Link href="/dax">
            <a>Dax (Germany 40)</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
      <div className={styles.container}>HOME</div>
    </div>
  );
}

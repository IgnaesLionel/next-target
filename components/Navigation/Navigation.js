import React from 'react';
import Link from "next/link";

const Navigation = () => {
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
        <li>
          <Link href="/sp500">
            <a>Sp500 (US-TECH 500)</a>
          </Link>
        </li>

        <li>
        <Link href="/send">
          <a>Envoyer des données</a>
        </Link>
      </li>
      </ul>
        </div>
    );
};

export default Navigation;
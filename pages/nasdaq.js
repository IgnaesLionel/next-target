import React from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";
import Link from "next/link";

export default function nasdaq({ data, spread, dataFut, timeFut, timeCfd }) {
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  return (
    <div className="accueil">
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
      </ul>
      <h1> Nasdaq</h1>
      <h2> indice - {timeCfd}</h2>
      <h2> future - {timeFut}</h2>
      <table>
        <tr>
          <td>
            Pivots Journalier CASH avec les données de la période du{" "}
            {data.Ddate}
          </td>
        </tr>
        <tr>
          <td>NasdaqDPP = {data.DClose}</td>
        </tr>
        <tr>
          <td>NasdaqDR1 = {data.DR1}</td>
        </tr>
        <tr>
          <td>NasdaqDS1 = {data.DS1}</td>
        </tr>
        <tr>
          <td>NasdaqDR2 = {data.DR2}</td>
        </tr>
        <tr>
          <td>NasdaqDS2 = {data.DS2}</td>
        </tr>
        <tr>
          <td>NasdaqDR3 = {data.DR3}</td>
        </tr>
        <tr>
          <td>NasdaqDS3 = {data.DS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
            {data.Wdate}
          </td>
        </tr>
        <tr>
          <td>NasdaqWPP = {data.WPP}</td>
        </tr>
        <tr>
          <td>NasdaqWR1 = {data.WR1}</td>
        </tr>
        <tr>
          <td>NasdaqWS1 = {data.WS1}</td>
        </tr>
        <tr>
          <td>NasdaqWR2 = {data.WR2}</td>
        </tr>
        <tr>
          <td>NasdaqWS2 = {data.WS2}</td>
        </tr>
        <tr>
          <td>NasdaqWR3 = {data.WR3}</td>
        </tr>
        <tr>
          <td>NasdaqWS3 = {data.WS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Mensuel CASH avec les données de la période {data.Mdate}
          </td>
        </tr>
        <tr>
          <td>NasdaqMPP = {data.MPP}</td>
        </tr>
        <tr>
          <td>NasdaqMR1 = {data.MR1}</td>
        </tr>
        <tr>
          <td>NasdaqMS1 = {data.MS1}</td>
        </tr>
        <tr>
          <td>NasdaqMR2 = {data.MR2}</td>
        </tr>
        <tr>
          <td>NasdaqMS2 = {data.MS2}</td>
        </tr>
        <tr>
          <td>NasdaqMR3 = {data.MR3}</td>
        </tr>
        <tr>
          <td>NasdaqMS3 = {data.MS3}</td>
        </tr>

        <tr>
          <td>
            Pivots Journalier Future avec les données de la période du{" "}
            {dataFut.Ddate}
          </td>
        </tr>
        <tr>
          <td>NasdaqDPP = {dataFut.DClose}</td>
        </tr>
        <tr>
          <td>NasdaqDR1 = {dataFut.DR1}</td>
        </tr>
        <tr>
          <td>NasdaqDS1 = {dataFut.DS1}</td>
        </tr>
        <tr>
          <td>NasdaqDR2 = {dataFut.DR2}</td>
        </tr>
        <tr>
          <td>NasdaqDS2 = {dataFut.DS2}</td>
        </tr>
        <tr>
          <td>NasdaqDR3 = {dataFut.DR3}</td>
        </tr>
        <tr>
          <td>NasdaqDS3 = {dataFut.DS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Hebdo Future avec les données de la période de la semaine du{" "}
            {dataFut.Wdate}
          </td>
        </tr>
        <tr>
          <td>NasdaqWPP = {dataFut.WPP}</td>
        </tr>
        <tr>
          <td>NasdaqWR1 = {dataFut.WR1}</td>
        </tr>
        <tr>
          <td>NasdaqWS1 = {dataFut.WS1}</td>
        </tr>
        <tr>
          <td>NasdaqWR2 = {dataFut.WR2}</td>
        </tr>
        <tr>
          <td>NasdaqWS2 = {dataFut.WS2}</td>
        </tr>
        <tr>
          <td>NasdaqWR3 = {dataFut.WR3}</td>
        </tr>
        <tr>
          <td>NasdaqWS3 = {dataFut.WS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Mensuel Future avec les données de la période {dataFut.Ddate}
          </td>
        </tr>
        <tr>
          <td>NasdaqMPP = {dataFut.MPP}</td>
        </tr>
        <tr>
          <td>NasdaqMR1 = {dataFut.MR1}</td>
        </tr>
        <tr>
          <td>NasdaqMS1 = {dataFut.MS1}</td>
        </tr>
        <tr>
          <td>NasdaqMR2 = {dataFut.MR2}</td>
        </tr>
        <tr>
          <td>NasdaqMS2 = {dataFut.MS2}</td>
        </tr>
        <tr>
          <td>NasdaqMR3 = {dataFut.MR3}</td>
        </tr>
        <tr>
          <td>NasdaqMS3 = {dataFut.MS3}</td>
        </tr>
      </table>
      <h4>Nasdaq Spot indicator</h4>
      <ProRealTime data={data} spread={0} market="CFD" />
      <h4>Nasdaq Futur indicator</h4>
      <ProRealTime data={dataFut} spread={spread} market="F" />
      <h4>GRID</h4>
      <Grid00 data={dataFut} spread={0} market="C" />
      grid futur
      <Grid00 data={dataFut} spread={spread} market="F" />
    </div>
  );
}

export async function getStaticProps() {
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/10").then((r) =>
    r.json()
  );

  const ppFut = await fetch("http://35.169.149.148:1337/djis/11").then((r) =>
    r.json()
  );

  const spreadData = await fetch("http://35.169.149.148:1337/spreads/2").then(
    (r) => r.json()
  );

  return {
    props: {
      data: ppCFD.PointPivots,
      timeCfd: ppCFD.updated_at,
      spread: spreadData.spread,
      dataFut: ppFut.PointPivots,
      timeFut: ppFut.updated_at,
    },
    revalidate: 5,
  };
}

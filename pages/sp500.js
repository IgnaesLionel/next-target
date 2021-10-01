import React from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";
import Link from "next/link";

export default function sp({ data, spread, dataFut, timeFut, timeCfd }) {
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
      </ul>
      <h1> Sp500 - us100</h1>
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
          <td>spDPP = {data.DClose}</td>
        </tr>
        <tr>
          <td>spDR1 = {data.DR1}</td>
        </tr>
        <tr>
          <td>spDS1 = {data.DS1}</td>
        </tr>
        <tr>
          <td>spDR2 = {data.DR2}</td>
        </tr>
        <tr>
          <td>spDS2 = {data.DS2}</td>
        </tr>
        <tr>
          <td>spDR3 = {data.DR3}</td>
        </tr>
        <tr>
          <td>spDS3 = {data.DS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
            {data.Wdate}
          </td>
        </tr>
        <tr>
          <td>spWPP = {data.WPP}</td>
        </tr>
        <tr>
          <td>spWR1 = {data.WR1}</td>
        </tr>
        <tr>
          <td>spWS1 = {data.WS1}</td>
        </tr>
        <tr>
          <td>spWR2 = {data.WR2}</td>
        </tr>
        <tr>
          <td>spWS2 = {data.WS2}</td>
        </tr>
        <tr>
          <td>spWR3 = {data.WR3}</td>
        </tr>
        <tr>
          <td>spWS3 = {data.WS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Mensuel CASH avec les données de la période {data.Mdate}
          </td>
        </tr>
        <tr>
          <td>spMPP = {data.MPP}</td>
        </tr>
        <tr>
          <td>spMR1 = {data.MR1}</td>
        </tr>
        <tr>
          <td>spMS1 = {data.MS1}</td>
        </tr>
        <tr>
          <td>spMR2 = {data.MR2}</td>
        </tr>
        <tr>
          <td>spMS2 = {data.MS2}</td>
        </tr>
        <tr>
          <td>spMR3 = {data.MR3}</td>
        </tr>
        <tr>
          <td>spMS3 = {data.MS3}</td>
        </tr>

        <tr>
          <td>
            Pivots Journalier Future avec les données de la période du{" "}
            {dataFut.Ddate}
          </td>
        </tr>
        <tr>
          <td>spDPP = {dataFut.DClose}</td>
        </tr>
        <tr>
          <td>spDR1 = {dataFut.DR1}</td>
        </tr>
        <tr>
          <td>spDS1 = {dataFut.DS1}</td>
        </tr>
        <tr>
          <td>spDR2 = {dataFut.DR2}</td>
        </tr>
        <tr>
          <td>spDS2 = {dataFut.DS2}</td>
        </tr>
        <tr>
          <td>spDR3 = {dataFut.DR3}</td>
        </tr>
        <tr>
          <td>spDS3 = {dataFut.DS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Hebdo Future avec les données de la période de la semaine du{" "}
            {dataFut.Wdate}
          </td>
        </tr>
        <tr>
          <td>spWPP = {dataFut.WPP}</td>
        </tr>
        <tr>
          <td>spWR1 = {dataFut.WR1}</td>
        </tr>
        <tr>
          <td>spWS1 = {dataFut.WS1}</td>
        </tr>
        <tr>
          <td>spWR2 = {dataFut.WR2}</td>
        </tr>
        <tr>
          <td>spWS2 = {dataFut.WS2}</td>
        </tr>
        <tr>
          <td>spWR3 = {dataFut.WR3}</td>
        </tr>
        <tr>
          <td>spWS3 = {dataFut.WS3}</td>
        </tr>
        <tr>
          <td>
            Pivots Mensuel Future avec les données de la période {dataFut.Ddate}
          </td>
        </tr>
        <tr>
          <td>spMPP = {dataFut.MPP}</td>
        </tr>
        <tr>
          <td>spMR1 = {dataFut.MR1}</td>
        </tr>
        <tr>
          <td>spMS1 = {dataFut.MS1}</td>
        </tr>
        <tr>
          <td>spMR2 = {dataFut.MR2}</td>
        </tr>
        <tr>
          <td>spMS2 = {dataFut.MS2}</td>
        </tr>
        <tr>
          <td>spMR3 = {dataFut.MR3}</td>
        </tr>
        <tr>
          <td>spMS3 = {dataFut.MS3}</td>
        </tr>
      </table>
      <h4>sp Spot indicator</h4>
      <ProRealTime data={data} spread={0} market="CFD" />
      <h4>sp Futur indicator</h4>
      <ProRealTime data={dataFut} spread={spread} market="F" />
      <h4>GRID CFD</h4>
      <Grid00 data={dataFut} spread={0} market="C" />
      grid futur
      <Grid00 data={dataFut} spread={0} market="F" />
    </div>
  );
}

export async function getStaticProps() {
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/14").then((r) =>
    r.json()
  );

  const ppFut = await fetch("http://35.169.149.148:1337/djis/15").then((r) =>
    r.json()
  );

  const spreadData = await fetch("http://35.169.149.148:1337/spreads/3").then(
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

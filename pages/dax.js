import React from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";

export default function dax({ data, spread, dataFut, timeFut, timeCfd }) {
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);
  console.log(`coucou`);

  return (
    <div className="accueil">
      <h1> Dax - Germany</h1>
      <h2> indice - {timeCfd}</h2>
      <h2> future - {timeFut}</h2>
      <table>
        <div>
          <tr>
            <td>
              Pivots Journalier avec les données de la période du {data.Ddate}
            </td>
          </tr>

          <tr>
            <td>daxDPP = {data.DClose}</td>
          </tr>
          <tr>
            <td>daxDR1 = {data.DR1}</td>
          </tr>
          <tr>
            <td>daxDS1 = {data.DS1}</td>
          </tr>
          <tr>
            <td>daxDR2 = {data.DR2}</td>
          </tr>
          <tr>
            <td>daxDS2 = {data.DS2}</td>
          </tr>
          <tr>
            <td>daxDR3 = {data.DR3}</td>
          </tr>
          <tr>
            <td>daxDS3 = {data.DS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>
              Pivots Hebdo avec les données de la période de la semaine du{" "}
              {data.Wdate}
            </td>
          </tr>
          <tr>
            <td>daxWPP = {data.WPP}</td>
          </tr>
          <tr>
            <td>daxWR1 = {data.WR1}</td>
          </tr>
          <tr>
            <td>daxWS1 = {data.WS1}</td>
          </tr>
          <tr>
            <td>daxWR2 = {data.WR2}</td>
          </tr>
          <tr>
            <td>daxWS2 = {data.WS2}</td>
          </tr>
          <tr>
            <td>daxWR3 = {data.WR3}</td>
          </tr>
          <tr>
            <td>daxWS3 = {data.WS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>
              Pivots Journalier avec les données de la période {data.Ddate}
            </td>
          </tr>
          <tr>
            <td>daxMPP = {data.MPP}</td>
          </tr>
          <tr>
            <td>daxMR1 = {data.MR1}</td>
          </tr>
          <tr>
            <td>daxMS1 = {data.MS1}</td>
          </tr>
          <tr>
            <td>daxMR2 = {data.MR2}</td>
          </tr>
          <tr>
            <td>daxMS2 = {data.MS2}</td>
          </tr>
          <tr>
            <td>daxMR3 = {data.MR3}</td>
          </tr>
          <tr>
            <td>daxMS3 = {data.MS3}</td>
          </tr>
        </div>
      </table>
      <h4>Dax Spot indicator</h4>
      <ProRealTime data={data} spread={0} market="CFD" />
      <h4>Dax Futur indicator</h4>
      <ProRealTime data={dataFut} spread={spread} market="F" />
      <h4>GRID CFD</h4>
      <Grid00 data={data} spread={0} market="C" />
      grid futur
      <Grid00 data={data} spread={spread} market="F" />
    </div>
  );
}

export async function getStaticProps() {
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/12").then((r) =>
    r.json()
  );

  const ppFut = await fetch("http://35.169.149.148:1337/djis/13").then((r) =>
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

import React from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";

export default function nasdaq({ data, spread, dataFut, timeFut, timeCfd }) {
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  return (
    <div className="accueil">
      <h1> Nasdaq{timeFut}</h1>
      <h2> indice - {timeCfd}</h2>
      <h2> future - {timeFut}</h2>
      <table>
        <div>
          <tr>
            <td>nqDPP = {data.DClose}</td>
          </tr>
          <tr>
            <td>nqDR1 = {data.DR1}</td>
          </tr>
          <tr>
            <td>nqDS1 = {data.DS1}</td>
          </tr>
          <tr>
            <td>nqDR2 = {data.DR2}</td>
          </tr>
          <tr>
            <td>nqDS2 = {data.DS2}</td>
          </tr>
          <tr>
            <td>nqDR3 = {data.DR3}</td>
          </tr>
          <tr>
            <td>nqDS3 = {data.DS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>nqWPP = {data.WPP}</td>
          </tr>
          <tr>
            <td>nqWR1 = {data.WR1}</td>
          </tr>
          <tr>
            <td>nqWS1 = {data.WS1}</td>
          </tr>
          <tr>
            <td>nqWR2 = {data.WR2}</td>
          </tr>
          <tr>
            <td>nqWS2 = {data.WS2}</td>
          </tr>
          <tr>
            <td>nqWR3 = {data.WR3}</td>
          </tr>
          <tr>
            <td>nqWS3 = {data.WS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>nqMPP = {data.MPP}</td>
          </tr>
          <tr>
            <td>nqMR1 = {data.MR1}</td>
          </tr>
          <tr>
            <td>nqMS1 = {data.MS1}</td>
          </tr>
          <tr>
            <td>nqMR2 = {data.MR2}</td>
          </tr>
          <tr>
            <td>nqMS2 = {data.MS2}</td>
          </tr>
          <tr>
            <td>nqMR3 = {data.MR3}</td>
          </tr>
          <tr>
            <td>nqMS3 = {data.MS3}</td>
          </tr>
        </div>
      </table>
      <h4>Nasdaq Spot indicator</h4>
      <ProRealTime data={data} spread={0} market="CFD" />
      <h4>Nasdaq Futur indicator</h4>
      <ProRealTime data={dataFut} spread={spread} market="F" />
      <h4>GRID CFD</h4>
      <Grid00 data={data} spread={0} market="C" />
      grid futur
      <Grid00 data={data} spread={spread} market="F" />
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

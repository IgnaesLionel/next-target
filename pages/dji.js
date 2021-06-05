import React from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";

export default function dji({ data, spread, dataFut }) {
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  return (
    <div className="accueil">
      <h1> Dow Jones CFD </h1>
      <table>
        <div>
          <tr>
            <td>djiDPP = {data.DClose}</td>
          </tr>
          <tr>
            <td>djiDR1 = {data.DR1}</td>
          </tr>
          <tr>
            <td>djiDS1 = {data.DS1}</td>
          </tr>
          <tr>
            <td>djiDR2 = {data.DR2}</td>
          </tr>
          <tr>
            <td>djiDS2 = {data.DS2}</td>
          </tr>
          <tr>
            <td>djiDR3 = {data.DR3}</td>
          </tr>
          <tr>
            <td>djiDS3 = {data.DS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>djiWPP = {data.WPP}</td>
          </tr>
          <tr>
            <td>djiWR1 = {data.WR1}</td>
          </tr>
          <tr>
            <td>djiWS1 = {data.WS1}</td>
          </tr>
          <tr>
            <td>djiWR2 = {data.WR2}</td>
          </tr>
          <tr>
            <td>djiWS2 = {data.WS2}</td>
          </tr>
          <tr>
            <td>djiWR3 = {data.WR3}</td>
          </tr>
          <tr>
            <td>djiWS3 = {data.WS3}</td>
          </tr>
        </div>
        <div>
          <tr>
            <td>djiMPP = {data.MPP}</td>
          </tr>
          <tr>
            <td>djiMR1 = {data.MR1}</td>
          </tr>
          <tr>
            <td>djiMS1 = {data.MS1}</td>
          </tr>
          <tr>
            <td>djiMR2 = {data.MR2}</td>
          </tr>
          <tr>
            <td>djiMS2 = {data.MS2}</td>
          </tr>
          <tr>
            <td>djiMR3 = {data.MR3}</td>
          </tr>
          <tr>
            <td>djiMS3 = {data.MS3}</td>
          </tr>
        </div>
      </table>
      <h4>DJI CFD</h4>
      <ProRealTime data={data} spread={0} />
      <h4>DJI FUTUR</h4>
      <ProRealTime data={dataFut} spread={spread} />
    </div>
  );
}

export async function getStaticProps() {
  //ou getServerSideProps pour des données tres dynamique
  //fetch Get Method coté serveur
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/6").then((r) =>
    r.json()
  ); //  stream object  ----> body headers __proto__

  if (ppCFD.length === 0) {
    return { notFound: true }; //notFound object pour return 404
  }

  const ppFut = await fetch("http://35.169.149.148:1337/djis/8").then((r) =>
    r.json()
  ); //  stream object  ----> body headers __proto__

  if (ppFut.length === 0) {
    return { notFound: true }; //notFound object pour return 404
  }

  const spreadData = await fetch("http://35.169.149.148:1337/spreads/1").then(
    (r) => r.json()
  );

  return {
    props: {
      data: ppCFD.PointPivots,
      spread: spreadData.spread,
      dataFut: ppFut.PointPivots,
    },
    revalidate: 5,
  };
}

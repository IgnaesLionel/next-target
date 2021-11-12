import React, { useState } from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import MajorLevels from "../components/MajorLevels/MajorLevels";
import Grid00 from "../components/Grid00/Grid00";
import GoldTracker from "../components/GoldTracker/GoldTracker"
import Navigation from "../components/Navigation/Navigation"

export default function dji({ data, spread, dataFut, timeFut, timeCfd }) {
  const [gap, setGap] = useState(0);
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  function handleChange(e) {
    setGap(e.target.value);
  }
  return (
    <div className="accueil">
    <Navigation/>
      <h1> Dow Jones / Wall Street</h1>
      <h2> cash mise à jour :  {timeCfd}</h2>
      <h2> future mise à jour :  {timeFut}</h2>
      <label>Gap cfd/futur</label>
      <input value={gap} onChange={handleChange}></input>

      <h4>Dji Major Levels Cash indicator</h4>
      <MajorLevels  gap={0} data={data} spread={0} market="Cash" />
      <h4>Dji Major Levels Futur indicator</h4>
      <MajorLevels  gap={gap} data={dataFut} spread={spread} market="Fut" />

      <h4>Dji Cash indicator</h4>
      <ProRealTime gap={0} data={data} spread={0} market="Cash" />
      <h4>Dji Future indicator</h4>
      <ProRealTime gap={gap} data={dataFut} spread={spread} market="Fut" />
      <h4>Grid Cash</h4>
      <Grid00 gap={0} data={data} spread={0} market="Cash" />
      <h4>Grid Future</h4>
      <Grid00 gap={gap} data={data} spread={spread} market="Fut" />
      <h4>Zones détectées</h4>
      <GoldTracker  gap={gap} dataCfd={data} dataFut={dataFut}/>
      <table>
        <thead>
          <strong>
            {" "}
            <h4>   Pivots Journalier CASH avec les données de la période du{" "}
            {data.Ddate}{" "}</h4>
          </strong>
        </thead>
        <tbody>
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
        </tbody>

        <thead>
        <h4>   Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
          {data.Wdate}</h4>
        </thead>
        <tbody>
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
        </tbody>
        <thead>
        <h4>Pivots Mensuel CASH avec les données de la période {data.Mdate}</h4>
        </thead>
        <tbody>
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
        </tbody>
        <thead>
        <h4>   Pivots Journalier Future avec les données de la période du{" "}
          {dataFut.Ddate}</h4>
        </thead>

        <tr>
          <td>djiDPP = {dataFut.DClose}</td>
        </tr>
        <tr>
          <td>djiDR1 = {dataFut.DR1}</td>
        </tr>
        <tr>
          <td>djiDS1 = {dataFut.DS1}</td>
        </tr>
        <tr>
          <td>djiDR2 = {dataFut.DR2}</td>
        </tr>
        <tr>
          <td>djiDS2 = {dataFut.DS2}</td>
        </tr>
        <tr>
          <td>djiDR3 = {dataFut.DR3}</td>
        </tr>
        <tr>
          <td>djiDS3 = {dataFut.DS3}</td>
        </tr>

        <thead>
        <h4>Pivots Hebdo Future avec les données de la période de la semaine du{" "}
          {dataFut.Wdate}</h4>
        </thead>
        <tbody>
          <tr>
            <td>djiWPP = {dataFut.WPP}</td>
          </tr>
          <tr>
            <td>djiWR1 = {dataFut.WR1}</td>
          </tr>
          <tr>
            <td>djiWS1 = {dataFut.WS1}</td>
          </tr>
          <tr>
            <td>djiWR2 = {dataFut.WR2}</td>
          </tr>
          <tr>
            <td>djiWS2 = {dataFut.WS2}</td>
          </tr>
          <tr>
            <td>djiWR3 = {dataFut.WR3}</td>
          </tr>
          <tr>
            <td>djiWS3 = {dataFut.WS3}</td>
          </tr>
        </tbody>
        <thead><h4>
          Pivots Mensuel Future avec les données de la période {dataFut.Ddate}</h4>
        </thead>
        <tbody>
          <tr>
            <td>djiMPP = {dataFut.MPP}</td>
          </tr>
          <tr>
            <td>djiMR1 = {dataFut.MR1}</td>
          </tr>
          <tr>
            <td>djiMS1 = {dataFut.MS1}</td>
          </tr>
          <tr>
            <td>djiMR2 = {dataFut.MR2}</td>
          </tr>
          <tr>
            <td>djiMS2 = {dataFut.MS2}</td>
          </tr>
          <tr>
            <td>djiMR3 = {dataFut.MR3}</td>
          </tr>
          <tr>
            <td>djiMS3 = {dataFut.MS3}</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export async function getStaticProps() {
  //ou getServerSideProps pour des données tres dynamique
  //fetch Get Method coté serveur
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/6").then((r) =>
    r.json()
  ); //  stream object  ----> body headers __proto__

  const ppFut = await fetch("http://35.169.149.148:1337/djis/9").then((r) =>
    r.json()
  ); //  stream object  ----> body headers __proto__

  const spreadData = await fetch("http://35.169.149.148:1337/spreads/1").then(
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

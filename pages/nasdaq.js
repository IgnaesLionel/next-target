import React, { useState } from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import MajorLevels from "../components/MajorLevels/MajorLevels";
import Grid00 from "../components/Grid00/Grid00";
import Navigation from "../components/Navigation/Navigation"
import GoldTracker from "../components/GoldTracker/GoldTracker"

export default function nasdaq({ data, spread, dataFut, timeFut, timeCfd }) {
  const [gap, setGap] = useState(0);
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  function handleChange(e) {
    setGap(e.target.value);
  }
  return (
    <div className="accueil">
    <Navigation/>
      <h1> Nasdaq US 100</h1>
      <h2> cash mise à jour :  {timeCfd}</h2>
      <h2> future mise à jour :  {timeFut}</h2>
      <label>Gap cfd/futur</label>
      <input value={gap} onChange={handleChange}></input>

      <h4>Nasdaq Major Levels Cash indicator</h4>
      <MajorLevels  gap={0} data={data} spread={0} market="Cash" />
      <h4>Nasdaq Major Levels Futur indicator</h4>
      <MajorLevels  gap={gap} data={dataFut} spread={spread} market="Fut" />

      <h4>Nasdaq Full levels Cash indicator</h4>
      <ProRealTime  gap={0} data={data} spread={0} market="Cash" />
      <h4>Nasdaq Full levels Future indicator</h4>
      <ProRealTime  gap={gap} data={dataFut} spread={spread} market="Fut" />
      <h4>Grid Cash</h4>
      <Grid00  gap={0} data={data} spread={0} market="Cash" />
      <h4>Grid Future</h4>
      <Grid00  gap={gap} data={data} spread={spread} market="Fut" />
      <h4>Zones détectées</h4>
      <GoldTracker  gap={gap} dataCfd={data} dataFut={dataFut}/>
      <table>
        <tr>
          <td>
          <h4>Pivots Journalier CASH avec les données de la période du{" "}
            {data.Ddate} !</h4>
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
          <h4>  Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
            {data.Wdate}</h4>
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
          <h4>Pivots Mensuel CASH avec les données de la période {data.Mdate}</h4>
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
          <h4> Pivots Journalier Future avec les données de la période du{" "}
            {dataFut.Ddate}</h4>
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
          <h4>Pivots Hebdo Future avec les données de la période de la semaine du{" "}
            {dataFut.Wdate}</h4>
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
            <h4>Pivots Mensuel Future avec les données de la période {dataFut.Ddate} </h4>
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

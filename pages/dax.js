import React, { useState } from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";
import Navigation from "../components/Navigation/Navigation"



export default function dax({ data, spread, dataFut, timeFut, timeCfd }) {
  const [gap, setGap] = useState(0);
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);

  function handleChange(e) {
    setGap(e.target.value);
  }

  return (
    <div className="accueil">
    <Navigation/>
      <h1> Dax - Germany</h1>
      <h2> cash mise à jour :  {timeCfd}</h2>
      <h2> future mise à jour :  {timeFut}</h2>
      <label>Gap cfd/futur</label>
      <input value={gap} onChange={handleChange}></input>
      <h4>Dax Cash indicator</h4>
      <ProRealTime data={data} spread={0} market="Cash" />
      <h4>Dax Future indicator</h4>
      <ProRealTime data={dataFut} spread={spread} market="Fut" />
      <h4>Grid Cash</h4>
      <Grid00 data={data} spread={0} market="Cash" />
      <h4>Grid Future</h4>
      <Grid00 data={data} spread={spread} market="Fut" />
      <table>
        <tr>
          <td>
          <h4>  Pivots Journalier CASH avec les données de la période du{" "}
            {data.Ddate}</h4>
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
        <tr>
          <td>
          <h4>  Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
            {data.Wdate}</h4>
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
        <tr>
          <td>
          <h4>   Pivots Mensuel CASH avec les données de la période {data.Mdate}</h4>
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

        <tr>
          <td>
          <h4>  Pivots Journalier Future avec les données de la période du{" "}
            {dataFut.Ddate}</h4>
          </td>
        </tr>
        <tr>
          <td>daxDPP = {dataFut.DClose}</td>
        </tr>
        <tr>
          <td>daxDR1 = {dataFut.DR1}</td>
        </tr>
        <tr>
          <td>daxDS1 = {dataFut.DS1}</td>
        </tr>
        <tr>
          <td>daxDR2 = {dataFut.DR2}</td>
        </tr>
        <tr>
          <td>daxDS2 = {dataFut.DS2}</td>
        </tr>
        <tr>
          <td>daxDR3 = {dataFut.DR3}</td>
        </tr>
        <tr>
          <td>daxDS3 = {dataFut.DS3}</td>
        </tr>
        <tr>
          <td>
          <h4>  Pivots Hebdo Future avec les données de la période de la semaine du{" "}
            {dataFut.Wdate}</h4>
          </td>
        </tr>
        <tr>
          <td>daxWPP = {dataFut.WPP}</td>
        </tr>
        <tr>
          <td>daxWR1 = {dataFut.WR1}</td>
        </tr>
        <tr>
          <td>daxWS1 = {dataFut.WS1}</td>
        </tr>
        <tr>
          <td>daxWR2 = {dataFut.WR2}</td>
        </tr>
        <tr>
          <td>daxWS2 = {dataFut.WS2}</td>
        </tr>
        <tr>
          <td>daxWR3 = {dataFut.WR3}</td>
        </tr>
        <tr>
          <td>daxWS3 = {dataFut.WS3}</td>
        </tr>
        <tr>
          <td>
          <h4>    Pivots Mensuel Future avec les données de la période {dataFut.Ddate}</h4>
          </td>
        </tr>
        <tr>
          <td>daxMPP = {dataFut.MPP}</td>
        </tr>
        <tr>
          <td>daxMR1 = {dataFut.MR1}</td>
        </tr>
        <tr>
          <td>daxMS1 = {dataFut.MS1}</td>
        </tr>
        <tr>
          <td>daxMR2 = {dataFut.MR2}</td>
        </tr>
        <tr>
          <td>daxMS2 = {dataFut.MS2}</td>
        </tr>
        <tr>
          <td>daxMR3 = {dataFut.MR3}</td>
        </tr>
        <tr>
          <td>daxMS3 = {dataFut.MS3}</td>
        </tr>
      </table>

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

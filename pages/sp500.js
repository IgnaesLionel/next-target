import React, { useState } from "react";
import ProRealTime from "../components/ProRealTime/ProRealTime";
import Grid00 from "../components/Grid00/Grid00";
import Navigation from "../components/Navigation/Navigation"


export default function sp({ data, spread, dataFut, timeFut, timeCfd }) {
  const [gap, setGap] = useState(0);
  data = JSON.parse(data);
  dataFut = JSON.parse(dataFut);
  
  function handleChange(e) {
    setGap(e.target.value);
  }

  return (
    <div className="accueil">
    <Navigation/>
      <h1> Sp500</h1>
      <h2> cash mise à jour :  {timeCfd}</h2>
      <h2> future mise à jour :  {timeFut}</h2>
      
      <label>Gap cfd/futur</label>
      <input value={gap} onChange={handleChange}></input>

      <h4>Sp500 Cash indicator</h4>
      <ProRealTime data={data} spread={0} market="Cash" />
      <h4>Sp500 Future indicator</h4>
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
          <td>SpDPP = {data.DClose}</td>
        </tr>
      
        <tr>
          <td>SpDR1 = {data.DR1}</td>
        </tr>
        <tr>
          <td>SpDS1 = {data.DS1}</td>
        </tr>
        <tr>
          <td>SpDR2 = {data.DR2}</td>
        </tr>
        <tr>
          <td>SpDS2 = {data.DS2}</td>
        </tr>
        <tr>
          <td>SpDR3 = {data.DR3}</td>
        </tr>
        <tr>
          <td>SpDS3 = {data.DS3}</td>
        </tr>
        <tr>
          <td>
           <h4> Pivots Hebdo CASH avec les données de la période de la semaine du{" "}
            {data.Wdate} </h4>
          </td>
        </tr>
        <tr>
          <td>SpWPP = {data.WPP}</td>
        </tr>
        <tr>
          <td>SpWR1 = {data.WR1}</td>
        </tr>
        <tr>
          <td>SpWS1 = {data.WS1}</td>
        </tr>
        <tr>
          <td>SpWR2 = {data.WR2}</td>
        </tr>
        <tr>
          <td>SpWS2 = {data.WS2}</td>
        </tr>
        <tr>
          <td>SpWR3 = {data.WR3}</td>
        </tr>
        <tr>
          <td>SpWS3 = {data.WS3}</td>
        </tr>
        <tr>
          <td>
            <h4> Pivots Mensuel CASH avec les données de la période {data.Mdate}</h4>
          </td>
        </tr>
        <tr>
          <td>SpMPP = {data.MPP}</td>
        </tr>
        <tr>
          <td>SpMR1 = {data.MR1}</td>
        </tr>
        <tr>
          <td>SpMS1 = {data.MS1}</td>
        </tr>
        <tr>
          <td>SpMR2 = {data.MR2}</td>
        </tr>
        <tr>
          <td>SpMS2 = {data.MS2}</td>
        </tr>
        <tr>
          <td>SpMR3 = {data.MR3}</td>
        </tr>
        <tr>
          <td>SpMS3 = {data.MS3}</td>
        </tr>

        <tr>
          <td>
           <h4> Pivots Journalier Future avec les données de la période du{" "}
            {dataFut.Ddate} </h4>
          </td>
        </tr>
        <tr>
          <td>SpDPP = {dataFut.DClose}</td>
        </tr>
        <tr>
          <td>SpDR1 = {dataFut.DR1}</td>
        </tr>
        <tr>
          <td>SpDS1 = {dataFut.DS1}</td>
        </tr>
        <tr>
          <td>SpDR2 = {dataFut.DR2}</td>
        </tr>
        <tr>
          <td>SpDS2 = {dataFut.DS2}</td>
        </tr>
        <tr>
          <td>SpDR3 = {dataFut.DR3}</td>
        </tr>
        <tr>
          <td>SpDS3 = {dataFut.DS3}</td>
        </tr>
        <tr>
          <td>
            <h4>Pivots Hebdo Future avec les données de la période de la semaine du{" "}
            {dataFut.Wdate}
            </h4>
          </td>
        </tr>
        <tr>
          <td>SpWPP = {dataFut.WPP}</td>
        </tr>
        <tr>
          <td>SpWR1 = {dataFut.WR1}</td>
        </tr>
        <tr>
          <td>SpWS1 = {dataFut.WS1}</td>
        </tr>
        <tr>
          <td>SpWR2 = {dataFut.WR2}</td>
        </tr>
        <tr>
          <td>SpWS2 = {dataFut.WS2}</td>
        </tr>
        <tr>
          <td>SpWR3 = {dataFut.WR3}</td>
        </tr>
        <tr>
          <td>SpWS3 = {dataFut.WS3}</td>
        </tr>
        <tr>
          <td>
            <h4>Pivots Mensuel Future avec les données de la période {dataFut.Ddate}</h4>
          </td>
        </tr>
        <tr>
          <td>SpMPP = {dataFut.MPP}</td>
        </tr>
        <tr>
          <td>SpMR1 = {dataFut.MR1}</td>
        </tr>
        <tr>
          <td>SpMS1 = {dataFut.MS1}</td>
        </tr>
        <tr>
          <td>SpMR2 = {dataFut.MR2}</td>
        </tr>
        <tr>
          <td>SpMS2 = {dataFut.MS2}</td>
        </tr>
        <tr>
          <td>SpMR3 = {dataFut.MR3}</td>
        </tr>
        <tr>
          <td>SpMS3 = {dataFut.MS3}</td>
        </tr>
      </table>

    </div>
  );
}

export async function getStaticProps() {
  const ppCFD = await fetch("http://35.169.149.148:1337/djis/14").then((r) =>
    r.json()
  );

  const ppFut = await fetch("http://35.169.149.148:1337/djis/17").then((r) =>
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

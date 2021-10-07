import React, { useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";

export default function send() {
  const [state, setState] = React.useState({
    openD: "",
    closeD: "",
    highD: "",
    lowD: "",
    openW: "",
    closeW: "",
    highW: "",
    lowW: "",
    openM: "",
    closeM: "",
    highM: "",
    lowM: "",
    dateD: "",
    dateW: "",
    dateM: "",
  });

  let dataWeek = [];
  let dataMonth = [];
  let dataDay = [];

  const [market, setMarket] = useState("");

  function myPivotPoints(high, low, close, date) {
    let myPp = Math.round(((Math.round(high) + Math.round(low) + Math.round(close)) / 3) * 100) / 100;
    let myR1 = Math.round((myPp * 2 - Math.round(low)) * 100) / 100;
    let myS1 = Math.round((myPp * 2 - Math.round(high)) * 100) / 100;
    let myR2 = Math.round((myPp + (Math.round(high) - Math.round(low))) * 100) / 100;
    let myS2 = Math.round((myPp - (Math.round(high) - Math.round(low))) * 100) / 100;
    let myR3 = Math.round((Math.round(high) + 2 * (myPp - Math.round(low))) * 100) / 100;
    let myS3 = Math.round((Math.round(low) - 2 * (Math.round(high) - myPp)) * 100) / 100;
    let mydate = date;
    console.log(myR1)
    return [myPp, myR1, myS1, myR2, myS2, myR3, myS3, mydate];
  }

  const handleSubmit = async (e) => {
    e.preventDefault(e);
console.log("submit")
    dataDay = myPivotPoints(state.highD, state.lowD, state.closeD, state.dateD);
    dataWeek = myPivotPoints(
      state.highW,
      state.lowW,
      state.closeW,
      state.dateW
    );
    dataMonth = myPivotPoints(
      state.highM,
      state.lowM,
      state.closeM,
      state.dateM
    );

    let fulldata = {
      DPP: dataDay[0],
      DR1: dataDay[1],
      DS1: dataDay[2],
      DR2: dataDay[3],
      DS2: dataDay[4],
      DR3: dataDay[5],
      DS3: dataDay[6],
      Ddate: dataDay[7],
      WPP: dataWeek[0],
      WR1: dataWeek[1],
      WS1: dataWeek[2],
      WR2: dataWeek[3],
      WS2: dataWeek[4],
      WR3: dataWeek[5],
      WS3: dataWeek[6],
      Wdate: dataWeek[7],
      MPP: dataMonth[0],
      MR1: dataMonth[1],
      MS1: dataMonth[2],
      MR2: dataMonth[3],
      MS2: dataMonth[4],
      MR3: dataMonth[5],
      MS3: dataMonth[6],
      Mdate: dataMonth[7],
      MHigh: state.highM,
      MLow: state.lowM,
      MClose: state.closeM,
      WHigh: state.highW,
      WLow: state.lowW,
      WClose: state.closeW,
      DHigh: state.highD,
      DLow: state.lowD,
      DClose: state.closeD,
    };

    console.log(fulldata);
    let donnees = JSON.stringify(fulldata);

    axios
      .put(`${market}`, {
        PointPivots: donnees,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value.trim(),
    });
  }

  return (
    <div className="accueil">
      <h1>Send data </h1>

      <form className="sectionModal" onSubmit={handleSubmit}>
        <div className="dataBox">
          <label htmlFor="inputNameD" className="form-check-label">
            {" "}
            Date Day{" "}
          </label>
          <input
            name="dateD"
            type="text"
            value={state.dateD}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input1" className="form-check-label">
            {" "}
            Open Day{" "}
          </label>
          <input
            name="openD"
            type="text"
            value={state.openD}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input3" className="form-check-label">
            {" "}
            High Day{" "}
          </label>
          <input
            name="highD"
            type="text"
            value={state.highD}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input4" className="form-check-label">
            {" "}
            Low Day{" "}
          </label>
          <input
            name="lowD"
            type="text"
            value={state.lowD}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input2" className="form-check-label">
            {" "}
            Close Day{" "}
          </label>
          <input
            name="closeD"
            type="text"
            value={state.closeD}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div className="dataBox">
          <label htmlFor="inputNameW" className="form-check-label">
            {" "}
            Date Week{" "}
          </label>
          <input
            name="dateW"
            type="text"
            value={state.dateW}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input5" className="form-check-label">
            {" "}
            Open Week{" "}
          </label>
          <input
            name="openW"
            type="text"
            value={state.openW}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input7" className="form-check-label">
            {" "}
            High Week{" "}
          </label>
          <input
            name="highW"
            type="text"
            value={state.highW}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="input8" className="form-check-label">
            {" "}
            Low Week{" "}
          </label>
          <input
            name="lowW"
            type="text"
            value={state.lowW}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input6" className="form-check-label">
            {" "}
            Close Week{" "}
          </label>
          <input
            name="closeW"
            type="text"
            value={state.closeW}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <div className="dataBox">
          <label htmlFor="inputNameM" className="form-check-label">
            {" "}
            Date Month{" "}
          </label>
          <input
            name="dateM"
            type="text"
            value={state.dateM}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input9" className="form-check-label">
            {" "}
            Open Month{" "}
          </label>
          <input
            name="openM"
            type="text"
            value={state.openM}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="input11" className="form-check-label">
            {" "}
            High Month{" "}
          </label>
          <input
            name="highM"
            type="text"
            value={state.highM}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="input12" className="form-check-label">
            {" "}
            Low Month{" "}
          </label>
          <input
            name="lowM"
            type="text"
            value={state.lowM}
            onChange={(e) => handleChange(e)}
          />

          <label htmlFor="input10" className="form-check-label">
            {" "}
            Close Month{" "}
          </label>
          <input
            name="closeM"
            type="text"
            value={state.closeM}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />

        <label htmlFor="pet-select">Market : </label>
        <select
          name="market"
          id="market-select"
          required
          onChange={(e) => setMarket(e.target.value)}
        >
          <option value="">Select</option>
          <option value="http://35.169.149.148:1337/djis/12">dax cash</option>
          <option value="http://35.169.149.148:1337/djis/10">
            nasdaq cash
          </option>
          <option value="http://35.169.149.148:1337/djis/6">dji cash</option>
          <option value="http://35.169.149.148:1337/djis/14">sp500 cash</option>
          <option value="http://35.169.149.148:1337/djis/13">dax Future</option>
          <option value="http://35.169.149.148:1337/djis/11">
            nasdaq Future
          </option>
          <option value="http://35.169.149.148:1337/djis/9">dji Future</option>
          <option value="http://35.169.149.148:1337/djis/17">
            sp500 Future
          </option>
        </select>

        <button className="toggleButtonUpdate" type="submit">
          Envoyer les données
        </button>
      </form>
    </div>
  );
}

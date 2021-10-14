import React, { useState } from "react";

const GoldTracker = ({ dataCfd, dataFut }) => {
  const [gap, setGap] = useState(0);

  function handleChange(e) {
    setGap(e.target.value);
  }

  const cfdArray = Object.entries(dataCfd);
  const futArray = Object.entries(dataFut);



  let closeCashValue = dataCfd.DPP;

  closeCashValue = parseInt(closeCashValue, 10);
  closeCashValue = closeCashValue / 1000;
  closeCashValue = parseInt(closeCashValue);
  closeCashValue = closeCashValue + "000";
  closeCashValue = parseFloat(closeCashValue);

  let closeCashValueFut = closeCashValue + parseInt(gap)

  let roundedNumberCfd =[
    ["niv01",closeCashValue],
    ["niv02",closeCashValue + 250],
    ["niv03",closeCashValue + 500],
    ["niv04",closeCashValue + 750],
    ["niv05",closeCashValue + 1000],
    ["niv06",closeCashValue - 250],
    ["niv07",closeCashValue - 500],
    ["niv08",closeCashValue - 750],
    ["niv09",closeCashValue - 1000],
    ["niv10",closeCashValue + 100],
    ["niv11",closeCashValue + 200],
    ["niv12",closeCashValue + 300],
    ["niv13",closeCashValue + 400],
    ["niv14",closeCashValue + 500],
    ["niv15",closeCashValue + 600],
    ["niv16",closeCashValue + 700],
    ["niv17",closeCashValue + 800],
    ["niv18",closeCashValue + 900],
    ["niv19",closeCashValue - 100],
    ["niv20",closeCashValue - 200],
    ["niv21",closeCashValue - 300],
    ["niv22",closeCashValue - 400],
    ["niv23",closeCashValue - 500],
    ["niv24",closeCashValue - 600],
    ["niv25",closeCashValue - 700],
    ["niv26",closeCashValue - 800],
    ["niv27",closeCashValue - 900]
]
  
let roundedNumberFut =[
    ["niv01",closeCashValueFut],
    ["niv02",closeCashValueFut + 250],
    ["niv03",closeCashValueFut + 500],
    ["niv04",closeCashValueFut + 750],
    ["niv05",closeCashValueFut + 1000],
    ["niv06",closeCashValueFut - 250],
    ["niv07",closeCashValueFut - 500],
    ["niv08",closeCashValueFut - 750],
    ["niv09",closeCashValueFut - 1000],
    ["niv10",closeCashValueFut + 100],
    ["niv11",closeCashValueFut + 200],
    ["niv12",closeCashValueFut + 300],
    ["niv13",closeCashValueFut + 400],
    ["niv14",closeCashValueFut + 500],
    ["niv15",closeCashValueFut + 600],
    ["niv16",closeCashValueFut + 700],
    ["niv17",closeCashValueFut + 800],
    ["niv18",closeCashValueFut + 900],
    ["niv19",closeCashValueFut - 100],
    ["niv20",closeCashValueFut - 200],
    ["niv21",closeCashValueFut - 300],
    ["niv22",closeCashValueFut - 400],
    ["niv23",closeCashValueFut - 500],
    ["niv24",closeCashValueFut - 600],
   ["niv25",closeCashValueFut - 700],
    ["niv26",closeCashValueFut - 800],
    ["niv27",closeCashValueFut - 900]
]

const marketArray = cfdArray.concat(futArray);
const marketArray2 = marketArray.concat(roundedNumberCfd)
const marketArray3 = marketArray2.concat(roundedNumberFut)
const newArray = []
marketArray3.map(level => newArray.push(level[1]));

const finalArray = newArray.sort() 


  return (
    <div>
      <h1> GoldTracker </h1>
<label>Gap cfd/futur</label>
      <input value={gap} onChange={handleChange}></input>

      <ul>
  {finalArray.map(x => {
    return (
      <li>
       {x}
      </li>
    )
  })}
</ul>

    </div>
  );
};

export default GoldTracker;

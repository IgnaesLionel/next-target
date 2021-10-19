import React, { useState, useEffect} from 'react';

const GoldTracker = ({ gap, dataCfd, dataFut }) => {

  const [commentText, setCommentText] = useState("loading...")

  let myArrayAveragedNumber = []
  useEffect(() => {
    setCommentText(`starttimeOPR = 000000
    endtimeOPR = 140000
  
    if intradaybarindex=0 then
    hhOpr = 0
    llOpr = 0
    alreadydrawn = 0
    endif
     
    if time=starttimeOPR then
    startbar=barindex
    endif
     
    if time=endtimeOPR then
    endbar=barindex
    endif
     
    if time>=starttimeOPR and time<=endtimeOPR then
    if high>hhOpr then
    hhOpr = high
    endif
    if low<llOpr or llOpr=0 then
    llOpr = low
    endif
    
    endif
     
    if time>endtimeOPR and alreadydrawn=0 then


    ${resultDraw}
 
    alreadydrawn=1
    
    endif
    
    
    RETURN
    `)}, [gap]);

  const copy = async () => {

    const tempInput = document.createElement('textarea')
    tempInput.innerHTML = `${commentText}`

    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    ;
}

const gapNumber = parseInt(gap)
const myDataCfd = dataCfd
const myDataFut = dataFut
delete myDataCfd.Ddate 
delete myDataCfd.Mdate
delete myDataCfd.Wdate  
delete myDataFut.Ddate 
delete myDataFut.Mdate
delete myDataFut.Wdate  

dataCfd.DMiddle= (dataCfd.DHigh+dataCfd.DLow)/2
dataCfd.WMiddle= (dataCfd.WHigh+dataCfd.WLow)/2
dataCfd.MMiddle= (dataCfd.MHigh+dataCfd.MLow)/2

dataCfd.mDR1 = (dataCfd.DPP+dataCfd.DR1)/2
dataCfd.mDS1 = (dataCfd.DPP+dataCfd.DS1)/2
dataCfd.mDR2 = (dataCfd.DR1+dataCfd.DR2)/2
dataCfd.mDS2 = (dataCfd.DS1+dataCfd.DS2)/2
dataCfd.mDR3 = (dataCfd.DR2+dataCfd.DR3)/2
dataCfd.mDS3 = (dataCfd.DS2+dataCfd.DS3)/2

dataCfd.mWR1 = (dataCfd.WPP+dataCfd.WR1)/2
dataCfd.mWS1 = (dataCfd.WPP+dataCfd.WS1)/2
dataCfd.mWR2 = (dataCfd.WR1+dataCfd.WR2)/2
dataCfd.mWS2 = (dataCfd.WS1+dataCfd.WS2)/2
dataCfd.mWR3 = (dataCfd.WR2+dataCfd.WR3)/2
dataCfd.mWS3 = (dataCfd.WS2+dataCfd.WS3)/2

dataCfd.mMR1 = (dataCfd.MPP+dataCfd.MR1)/2
dataCfd.mMS1 = (dataCfd.MPP+dataCfd.MS1)/2
dataCfd.mMR2 = (dataCfd.MR1+dataCfd.MR2)/2
dataCfd.mMS2 = (dataCfd.MS1+dataCfd.MS2)/2
dataCfd.mMR3 = (dataCfd.MR2+dataCfd.MR3)/2
dataCfd.mMS3 = (dataCfd.MS2+dataCfd.MS3)/2

dataFut.DMiddle= (dataFut.DHigh+dataFut.DLow)/2
dataFut.WMiddle= (dataFut.WHigh+dataFut.WLow)/2
dataFut.MMiddle= (dataFut.MHigh+dataFut.MLow)/2

dataFut.mDR1 = (dataFut.DPP+dataFut.DR1)/2
dataFut.mDS1 = (dataFut.DPP+dataFut.DS1)/2
dataFut.mDR2 = (dataFut.DR1+dataFut.DR2)/2
dataFut.mDS2 = (dataFut.DS1+dataFut.DS2)/2
dataFut.mDR3 = (dataFut.DR2+dataFut.DR3)/2
dataFut.mDS3 = (dataFut.DS2+dataFut.DS3)/2

dataFut.mWR1 = (dataFut.WPP+dataFut.WR1)/2
dataFut.mWS1 = (dataFut.WPP+dataFut.WS1)/2
dataFut.mWR2 = (dataFut.WR1+dataFut.WR2)/2
dataFut.mWS2 = (dataFut.WS1+dataFut.WS2)/2
dataFut.mWR3 = (dataFut.WR2+dataFut.WR3)/2
dataFut.mWS3 = (dataFut.WS2+dataFut.WS3)/2

dataFut.mMR1 = (dataFut.MPP+dataFut.MR1)/2
dataFut.mMS1 = (dataFut.MPP+dataFut.MS1)/2
dataFut.mMR2 = (dataFut.MR1+dataFut.MR2)/2
dataFut.mMS2 = (dataFut.MS1+dataFut.MS2)/2
dataFut.mMR3 = (dataFut.MR2+dataFut.MR3)/2
dataFut.mMS3 = (dataFut.MS2+dataFut.MS3)/2

//rename keys
const cfdArray = Object.fromEntries(
  Object.entries(myDataCfd).map(([key, value]) => 
    [`cfd-${key}`, value]
  )
)
//rename keys
const futArray = Object.fromEntries(
  Object.entries(myDataFut).map(([key, value]) => 
    [`fut-${key}`, value+gapNumber]
  )
)

  let closeCashValue = dataCfd.DPP;

  closeCashValue = parseInt(closeCashValue, 10);
  closeCashValue = closeCashValue / 1000;
  closeCashValue = parseInt(closeCashValue);
  closeCashValue = closeCashValue + "000";
  closeCashValue = parseFloat(closeCashValue);

  let closeCashValueFut = closeCashValue + gapNumber

  let roundedNumberCfd ={
    cfdniv01:closeCashValue,
    cfdniv02:closeCashValue + 250,
    cfdniv03:closeCashValue + 500,
    cfdniv04:closeCashValue + 750,
    cfdniv05:closeCashValue + 1000,
    cfdniv06:closeCashValue - 250,
    cfdniv07:closeCashValue - 500,
    cfdniv08:closeCashValue - 750,
    cfdniv09:closeCashValue - 1000,
    cfdniv10:closeCashValue + 100,
    cfdniv11:closeCashValue + 200,
    cfdniv12:closeCashValue + 300,
    cfdniv13:closeCashValue + 400,
    cfdniv15:closeCashValue + 600,
    cfdniv16:closeCashValue + 700,
    cfdniv17:closeCashValue + 800,
    cfdniv18:closeCashValue + 900,
    cfdniv19:closeCashValue - 100,
    cfdniv20:closeCashValue - 200,
    cfdniv21:closeCashValue - 300,
    cfdniv22:closeCashValue - 400,
    cfdniv24:closeCashValue - 600,
    cfdniv25:closeCashValue - 700,
    cfdniv26:closeCashValue - 800,
    cfdniv27:closeCashValue - 900,
    cfdniv28:closeCashValue + 1250,
    cfdniv29:closeCashValue + 1500,
    cfdniv30:closeCashValue + 1750,
    cfdniv31:closeCashValue - 1250,
    cfdniv32:closeCashValue - 1500,
    cfdniv33:closeCashValue - 1750,
    cfdniv34:closeCashValue + 1100,
    cfdniv35:closeCashValue + 1200,
    cfdniv36:closeCashValue + 1300,
    cfdniv37:closeCashValue + 1400,
    cfdniv39:closeCashValue + 1600,
    cfdniv40:closeCashValue + 1700,
    cfdniv41:closeCashValue + 1800,
    cfdniv42:closeCashValue + 1900,
    cfdniv43:closeCashValue - 1100,
    cfdniv44:closeCashValue - 1200,
    cfdniv45:closeCashValue - 1300,
    cfdniv46:closeCashValue - 1400,
    cfdniv48:closeCashValue - 1600,
    cfdniv49:closeCashValue - 1700,
    cfdniv50:closeCashValue - 1800,
    cfdniv51:closeCashValue - 1900
  }


  let roundedNumberFut ={
    futniv01:closeCashValueFut,
    futniv02:closeCashValueFut + 250,
    futniv03:closeCashValueFut + 500,
    futniv04:closeCashValueFut + 750,
    futniv05:closeCashValueFut + 1000,
    futniv06:closeCashValueFut - 250,
    futniv07:closeCashValueFut - 500,
    futniv08:closeCashValueFut - 750,
    futniv09:closeCashValueFut - 1000,
    futniv10:closeCashValueFut + 100,
    futniv11:closeCashValueFut + 200,
    futniv12:closeCashValueFut + 300,
    futniv13:closeCashValueFut + 400,
    futniv15:closeCashValueFut + 600,
    futniv16:closeCashValueFut + 700,
    futniv17:closeCashValueFut + 800,
    futniv18:closeCashValueFut + 900,
    futniv19:closeCashValueFut - 100,
    futniv20:closeCashValueFut - 200,
    futniv21:closeCashValueFut - 300,
    futniv22:closeCashValueFut - 400,
    futniv24:closeCashValueFut - 600,
    futniv25:closeCashValueFut - 700,
    futniv26:closeCashValueFut - 800,
    futniv27:closeCashValueFut - 900,
    futniv28:closeCashValueFut + 1250,
    futniv29:closeCashValueFut + 1500,
    futniv30:closeCashValueFut + 1750,
    futniv31:closeCashValueFut - 1250,
    futniv32:closeCashValueFut - 1500,
    futniv33:closeCashValueFut - 1750,
    futniv34:closeCashValueFut + 1100,
    futniv35:closeCashValueFut + 1200,
    futniv36:closeCashValueFut + 1300,
    futniv37:closeCashValueFut + 1400,
    futniv39:closeCashValueFut + 1600,
    futniv40:closeCashValueFut + 1700,
    futniv41:closeCashValueFut + 1800,
    futniv42:closeCashValueFut + 1900,
    futniv43:closeCashValueFut - 1100,
    futniv44:closeCashValueFut - 1200,
    futniv45:closeCashValueFut - 1300,
    futniv46:closeCashValueFut - 1400,
    futniv48:closeCashValueFut - 1600,
    futniv49:closeCashValueFut - 1700,
    futniv50:closeCashValueFut - 1800,
    futniv51:closeCashValueFut - 1900
  }




//POWER


//concat obj
const ppArray = Object.assign({}, cfdArray, futArray, roundedNumberCfd, roundedNumberFut);
/*   Object.fromEntries() array to object */

//sort
const sortableppArray = 
  Object.entries(ppArray).sort(([,b],[,a]) => a-b)

//remove decimal
const sortableppArray2 = sortableppArray.map((a)=> [a[0],Math.round(a[1])])

let finalArray = []

//add sensibility
sortableppArray2.map(x=>{ 
 
  finalArray.push([x[0], x[1]+1])
  finalArray.push([x[0], x[1]+2])
  finalArray.push([x[0], x[1]+3])
  finalArray.push([x[0], x[1]+4])

  finalArray.push([x[0], x[1]-1])
  finalArray.push([x[0], x[1]-2])
  finalArray.push([x[0], x[1]-3])
  finalArray.push([x[0], x[1]-4])

})


var uniq = finalArray.map((item) => {
    return {
      count: 1,
      number: item[1]
    }
   
  }).reduce((a, obj) => { //(previousValue, currentValue)
    (a[obj.number] ) = (a[obj.number] || 0) + obj.count
    return a
  }, {})



var duplicates = Object.keys(uniq).filter((a) => uniq[a] > 2)

//string to number
var duplicatesNum = duplicates.map(function (x) { 
  return parseInt(x, 10); 
})

let myArray = []


const average = (array) => array.reduce((a, b) => a + b,0) / array.length;

for (let i = 0; i < duplicatesNum.length; i++) {
  
   if( duplicatesNum[i]==duplicatesNum[i+1]-1){
    myArray.push(duplicatesNum[i])
   
  } else {    
    myArrayAveragedNumber.push(average(myArray))
    myArray=[]
    myArray.push(duplicatesNum[i+1])
    i++}
  }

  myArrayAveragedNumber = myArrayAveragedNumber.map((a)=> Math.round(a))

 const addDrawRectangle=  myArrayAveragedNumber.map((x,i)=>`drawrectangle(starttimeOPR,${x-3},endtimeOPR,${x+3})coloured(111,111,111,50)bordercolor(255,255,111) STYLE(line,1) 
 `)

 const resultDraw = addDrawRectangle.join("")

console.log(resultDraw)
 return (
    <div className='indicatorBox'>
    <label for="GoldTracker"></label>
    <textarea
    readOnly
    id="GoldTracker"
    name="GoldTracker"
    rows="5"
    cols="33"
    value={`${commentText}`}
  />
  <button  className="copyBtn" onClick={()=> copy()}>Copy</button>

    </div>
  );
};

export default GoldTracker;

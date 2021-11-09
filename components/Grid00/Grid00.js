import React, { useState, useEffect} from 'react';

const Grid00 = ({ gap, data, spread, market }) => {

  const [commentText, setCommentText] = useState()

useEffect(() => {
  setCommentText(`
  defparam drawonlastbaronly = true
  Voffset = 1*pipsize

  gap = ${gap} // Cash = 0
  g0 = ${roundedNumber[0]} + gap
   g1 = ${roundedNumber[1]} + gap
   g2 = ${roundedNumber[2]} + gap
   g3 = ${roundedNumber[3]} + gap
   g4 = ${roundedNumber[4]} + gap
   g5 = ${roundedNumber[5]} + gap
   g6 = ${roundedNumber[6]} + gap
   g7 = ${roundedNumber[7]} + gap
   g8 = ${roundedNumber[8]} + gap
   g9 = ${roundedNumber[9]} + gap
   g10 = ${roundedNumber[10]} + gap
   g11 = ${roundedNumber[11]} + gap
   g12 = ${roundedNumber[12]} + gap
   g13 = ${roundedNumber[13]} + gap
   g14 = ${roundedNumber[14]} + gap
   g15 = ${roundedNumber[15]} + gap
   g16 = ${roundedNumber[16]} + gap
   g17 = ${roundedNumber[17]} + gap
   g18 = ${roundedNumber[18]} + gap
   g19 = ${roundedNumber[19]} + gap
   g20 = ${roundedNumber[20]} + gap
   g21 = ${roundedNumber[21]} + gap
   g22 = ${roundedNumber[22]} + gap
   g23 = ${roundedNumber[23]} + gap
   g24 = ${roundedNumber[24]} + gap
   g25 = ${roundedNumber[25]} + gap
   g26 = ${roundedNumber[26]} + gap
   g27 = ${roundedNumber[27]} + gap
   g28 = ${roundedNumber[28]} + gap
   g29 = ${roundedNumber[29]} + gap
   g30 = ${roundedNumber[30]} + gap
   g31 = ${roundedNumber[31]} + gap
   g32 = ${roundedNumber[32]} + gap
   g33 = ${roundedNumber[33]} + gap
   g34 = ${roundedNumber[34]} + gap
   g35 = ${roundedNumber[35]} + gap
   g36 = ${roundedNumber[36]} + gap
   g37 = ${roundedNumber[37]} + gap
   g38 = ${roundedNumber[38]} + gap
   g39 = ${roundedNumber[39]} + gap
   g40 = ${roundedNumber[40]} + gap
   g41 = ${roundedNumber[41]} + gap
   g42 = ${roundedNumber[42]} + gap
   g43 = ${roundedNumber[43]} + gap
   g44 = ${roundedNumber[44]} + gap
   g45 = ${roundedNumber[45]} + gap
   g46 = ${roundedNumber[46]} + gap
   g47 = ${roundedNumber[47]} + gap
   g48 = ${roundedNumber[48]} + gap
   g49 = ${roundedNumber[49]} + gap
   g50 = ${roundedNumber[50]} + gap

   DRAWHLINE(g0)coloured(255,0,0)
   DRAWHLINE(g1)coloured(255,0,0)
   DRAWHLINE(g2)coloured(255,0,0)
   DRAWHLINE(g3)coloured(255,0,0)
   DRAWHLINE(g4)coloured(255,0,0)
   DRAWHLINE(g5)coloured(255,0,0)
   DRAWHLINE(g6)coloured(255,0,0)
   DRAWHLINE(g7)coloured(255,0,0)
   DRAWHLINE(g8)coloured(255,0,0)
   DRAWHLINE(g9)coloured(150,150,150)
   DRAWHLINE(g10)coloured(150,150,150)
   DRAWHLINE(g11)coloured(150,150,150)
   DRAWHLINE(g12)coloured(150,150,150)
   DRAWHLINE(g13)coloured(150,150,150)
   DRAWHLINE(g14)coloured(150,150,150)
   DRAWHLINE(g15)coloured(150,150,150)
   DRAWHLINE(g16)coloured(150,150,150)
   DRAWHLINE(g17)coloured(150,150,150)
   DRAWHLINE(g18)coloured(150,150,150)
   DRAWHLINE(g19)coloured(150,150,150)
   DRAWHLINE(g20)coloured(150,150,150)
   DRAWHLINE(g21)coloured(150,150,150)
   DRAWHLINE(g22)coloured(150,150,150)
   DRAWHLINE(g23)coloured(150,150,150)
   DRAWHLINE(g24)coloured(150,150,150)
   DRAWHLINE(g25)coloured(150,150,150)
   DRAWHLINE(g26)coloured(150,150,150)
   DRAWHLINE(g27)coloured(255,0,0)
   DRAWHLINE(g28)coloured(255,0,0)
   DRAWHLINE(g29)coloured(255,0,0)
   DRAWHLINE(g30)coloured(255,0,0)
   DRAWHLINE(g31)coloured(255,0,0)
   DRAWHLINE(g32)coloured(255,0,0)
   DRAWHLINE(g33)coloured(150,150,150)
   DRAWHLINE(g34)coloured(150,150,150)
   DRAWHLINE(g35)coloured(150,150,150)
   DRAWHLINE(g36)coloured(150,150,150)
   DRAWHLINE(g37)coloured(150,150,150)
   DRAWHLINE(g38)coloured(150,150,150)
   DRAWHLINE(g39)coloured(150,150,150)
   DRAWHLINE(g40)coloured(150,150,150)
   DRAWHLINE(g41)coloured(150,150,150)
   DRAWHLINE(g42)coloured(150,150,150)
   DRAWHLINE(g43)coloured(150,150,150)
   DRAWHLINE(g44)coloured(150,150,150)
   DRAWHLINE(g45)coloured(150,150,150)
   DRAWHLINE(g46)coloured(150,150,150)
   DRAWHLINE(g47)coloured(150,150,150)
   DRAWHLINE(g48)coloured(150,150,150)
   DRAWHLINE(g49)coloured(150,150,150)
   DRAWHLINE(g50)coloured(150,150,150)


   DRAWTEXT("${roundedNumber[0]} ${market}",barindex+10,g0+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[1]} ${market}",barindex+10,g1+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[2]} ${market}",barindex+10,g2+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[3]} ${market}",barindex+10,g3+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[4]} ${market}",barindex+10,g4+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[5]} ${market}",barindex+10,g5+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[6]} ${market}",barindex+10,g6+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[7]} ${market}",barindex+10,g7+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[8]} ${market}",barindex+10,g8+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[9]} ${market}",barindex+10,g9+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[10]} ${market}",barindex+10,g10+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[11]} ${market}",barindex+10,g11+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[12]} ${market}",barindex+10,g12+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[13]} ${market}",barindex+10,g13+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[14]} ${market}",barindex+10,g14+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[15]} ${market}",barindex+10,g15+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[16]} ${market}",barindex+10,g16+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[17]} ${market}",barindex+10,g17+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[18]} ${market}",barindex+10,g18+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[19]} ${market}",barindex+10,g19+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[20]} ${market}",barindex+10,g20+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[21]} ${market}",barindex+10,g21+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[22]} ${market}",barindex+10,g22+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[23]} ${market}",barindex+10,g23+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[24]} ${market}",barindex+10,g24+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[25]} ${market}",barindex+10,g25+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[26]} ${market}",barindex+10,g26+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[27]} ${market}",barindex+10,g27+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[28]} ${market}",barindex+10,g28+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[29]} ${market}",barindex+10,g29+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[30]} ${market}",barindex+10,g30+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[31]} ${market}",barindex+10,g31+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[32]} ${market}",barindex+10,g32+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[33]} ${market}",barindex+10,g33+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[34]} ${market}",barindex+10,g34+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[35]} ${market}",barindex+10,g35+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[36]} ${market}",barindex+10,g36+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[37]} ${market}",barindex+10,g37+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[38]} ${market}",barindex+10,g38+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[39]} ${market}",barindex+10,g39+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[40]} ${market}",barindex+10,g40+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[41]} ${market}",barindex+10,g41+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[42]} ${market}",barindex+10,g42+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[43]} ${market}",barindex+10,g43+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[44]} ${market}",barindex+10,g44+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[45]} ${market}",barindex+10,g45+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[46]} ${market}",barindex+10,g46+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[47]} ${market}",barindex+10,g47+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[48]} ${market}",barindex+10,g48+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[49]} ${market}",barindex+10,g49+Voffset,SansSerif,Bold,10)coloured(255,0,0)
   DRAWTEXT("${roundedNumber[50]} ${market}",barindex+10,g50+Voffset,SansSerif,Bold,10)coloured(255,0,0)


  RETURN 
  `)}, [gap])

  let style = [
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
    "COLOURED(255,0,0)",
  ];

  let roundedNumber = [];
  let closeCashValue = data.DPP;

  closeCashValue = parseInt(closeCashValue, 10);
  closeCashValue = closeCashValue / 1000;
  closeCashValue = parseInt(closeCashValue);
  closeCashValue = closeCashValue + "000";
  closeCashValue = parseFloat(closeCashValue);

  roundedNumber.push(
    closeCashValue,
    closeCashValue + 250,
    closeCashValue + 500,
    closeCashValue + 750,
    closeCashValue + 1000,
    closeCashValue - 250,
    closeCashValue - 500,
    closeCashValue - 750,
    closeCashValue - 1000,
    closeCashValue + 100,
    closeCashValue + 200,
    closeCashValue + 300,
    closeCashValue + 400,
    closeCashValue + 500,
    closeCashValue + 600,
    closeCashValue + 700,
    closeCashValue + 800,
    closeCashValue + 900,
    closeCashValue - 100,
    closeCashValue - 200,
    closeCashValue - 300,
    closeCashValue - 400,
    closeCashValue - 500,
    closeCashValue - 600,
    closeCashValue - 700,
    closeCashValue - 800,
    closeCashValue - 900,
    closeCashValue + 1250,
    closeCashValue + 1500,
    closeCashValue + 1750,
    closeCashValue - 1250,
    closeCashValue - 1500,
    closeCashValue - 1750,
    closeCashValue + 1100,
    closeCashValue + 1200,
    closeCashValue + 1300,
    closeCashValue + 1400,
    closeCashValue + 1500,
    closeCashValue + 1600,
    closeCashValue + 1700,
    closeCashValue + 1800,
    closeCashValue + 1900,
    closeCashValue - 1100,
    closeCashValue - 1200,
    closeCashValue - 1300,
    closeCashValue - 1400,
    closeCashValue - 1500,
    closeCashValue - 1600,
    closeCashValue - 1700,
    closeCashValue - 1800,
    closeCashValue - 1900

  );

  for (let i = 0; i < 9; i++) {
    if (roundedNumber[i] % 1000 == 0) {
      style[i] = "COLOURED(255,0,0)";
    }

    if (roundedNumber[i] % 1000 == 500) {
      style[i] = "COLOURED(255,0,0)";
    }
  }


  const copy = async () => {
    const tempInput = document.createElement('textarea')
    tempInput.innerHTML = `${commentText}`
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand('copy')
    document.body.removeChild(tempInput)
    ;
}
 
  return (
    <div className='indicatorBox'>
      <label htmlFor="grid"></label>
    
      <textarea
        readOnly
        id="grid"
        name="grid"
        rows="5"
        cols="33"
        
        value={`${commentText}`}
   
    
      />
        <button className="copyBtn"
      onClick={()=> copy()}>Copy</button>
    </div>
  );
};

export default Grid00;

import React from "react";

const Grid00 = ({ data, spread, market }) => {
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
    closeCashValue - 1000
  );

  for (let i = 0; i < 9; i++) {
    if (roundedNumber[i] % 1000 == 0) {
      style[i] = "COLOURED(255,0,0)";
    }

    if (roundedNumber[i] % 1000 == 500) {
      style[i] = "COLOURED(255,0,0)";
    }
  }

  return (
    <div>
      <label htmlFor="grid"></label>
      <textarea
        readOnly
        id="grid"
        name="grid"
        rows="5"
        cols="33"
        value={`
    defparam drawonlastbaronly = true
    Voffset = 1*pipsize

    gap = ${spread}
    g0 = ${roundedNumber[0]} + gap
     g1 = ${roundedNumber[1]} + gap
     g2 = ${roundedNumber[2]} + gap
     g3 = ${roundedNumber[3]} + gap
     g4 = ${roundedNumber[4]} + gap
     g5 = ${roundedNumber[5]} + gap
     g6 = ${roundedNumber[6]} + gap
     g7 = ${roundedNumber[7]} + gap
     g8 = ${roundedNumber[8]} + gap


     DRAWHLINE(g0)coloured(255,0,0)
     DRAWHLINE(g1)coloured(255,0,0)
     DRAWHLINE(g2)coloured(255,0,0)
     DRAWHLINE(g3)coloured(255,0,0)
     DRAWHLINE(g4)coloured(255,0,0)
     DRAWHLINE(g5)coloured(255,0,0)
     DRAWHLINE(g6)coloured(255,0,0)
     DRAWHLINE(g7)coloured(255,0,0)
     DRAWHLINE(g8)coloured(255,0,0)

     DRAWTEXT("${roundedNumber[0]} ${market}",barindex+50,g0+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[1]} ${market}",barindex+50,g1+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[2]} ${market}",barindex+50,g2+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[3]} ${market}",barindex+50,g3+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[4]} ${market}",barindex+50,g4+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[5]} ${market}",barindex+50,g5+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[6]} ${market}",barindex+50,g6+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[7]} ${market}",barindex+50,g7+Voffset,SansSerif,Bold,10)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[8]} ${market}",barindex+50,g8+Voffset,SansSerif,Bold,10)coloured(255,255,255)
    RETURN 
    `}
      />
    </div>
  );
};

export default Grid00;

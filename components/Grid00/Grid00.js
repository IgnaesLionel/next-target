import React from "react";

const Grid00 = ({ data, spread, market }) => {
  let style = [
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
    "COLOURED(128, 128, 128)",
  ];

  let roundedNumber = [];
  let closeCashValue = data.WPP;

  closeCashValue = parseInt(closeCashValue, 10);
  closeCashValue = closeCashValue / 100;
  closeCashValue = parseInt(closeCashValue);
  closeCashValue = closeCashValue + "00";
  closeCashValue = parseFloat(closeCashValue);

  roundedNumber.push(
    closeCashValue,
    closeCashValue + 100,
    closeCashValue + 200,
    closeCashValue + 300,
    closeCashValue + 400,
    closeCashValue - 100,
    closeCashValue - 200,
    closeCashValue - 300,
    closeCashValue - 400
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

     DRAWTEXT("${roundedNumber[0]} ${market}",barindex-2,g0+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[1]} ${market}",barindex-2,g1+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[2]} ${market}",barindex-2,g2+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[3]} ${market}",barindex-2,g3+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[4]} ${market}",barindex-2,g4+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[5]} ${market}",barindex-2,g5+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[6]} ${market}",barindex-2,g6+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[7]} ${market}",barindex-2,g7+Voffset,SansSerif,Bold,16)coloured(255,255,255)
     DRAWTEXT("${roundedNumber[8]} ${market}",barindex-2,g8+Voffset,SansSerif,Bold,16)coloured(255,255,255)
    RETURN g0 ${style[0]} STYLE(line,3) AS"g0",  g1 ${style[1]} STYLE(line,3) AS" g1",  g2 ${style[2]} STYLE(line,3) AS" g2",  g3 ${style[3]} STYLE(line,3) AS" g3",  g4 ${style[4]} STYLE(line,3) AS" g4",  g5 ${style[5]} STYLE(line,3) AS" g5",  g6 ${style[6]} STYLE(line,3) AS" g6",  g7 ${style[7]} STYLE(line,3) AS" g7",  g8 ${style[8]} STYLE(line,3) AS" g8"
    `}
      />
    </div>
  );
};

export default Grid00;

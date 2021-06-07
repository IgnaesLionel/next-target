import React from "react";

const Grid00 = ({ data, spread }) => {
  console.log(data.DClose);
  let roundedNumber = [];
  let closeCashValue = data.DClose;

  closeCashValue = parseInt(closeCashValue, 10);
  closeCashValue = closeCashValue / 100;
  closeCashValue = parseInt(closeCashValue);
  closeCashValue = closeCashValue + "00";
  closeCashValue = parseFloat(closeCashValue);
  console.log(closeCashValue);

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

  console.log(roundedNumber);
  
  roundedNumber.map(())

  return (
    <div>
      <label for="ProRealTime"></label>
      <textarea
        readOnly
        id="ProRealTime"
        name="ProRealTime"
        rows="5"
        cols="33"
        value={`
    defparam drawonlastbaronly = true

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


    RETURN g0 COLOURED(128, 128, 128) STYLE(line,3) AS"g0",  g1 COLOURED(128, 128, 128) STYLE(line,3) AS" g1",  g2 COLOURED(128, 128, 128) STYLE(line,3) AS" g2",  g3 COLOURED(128, 128, 128) STYLE(line,3) AS" g3",  g4 COLOURED(128, 128, 128) STYLE(line,3) AS" g4",  g5 COLOURED(128, 128, 128) STYLE(line,3) AS" g5",  g6 COLOURED(128, 128, 128) STYLE(line,3) AS" g6",  g7 COLOURED(128, 128, 128) STYLE(line,3) AS" g7",  g8 COLOURED(128, 128, 128) STYLE(line,3) AS" g8"
    `}
      />
    </div>
  );
};

export default Grid00;

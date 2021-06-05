import React from "react";

const ProRealTime = ({ data, spread }) => {
  console.log(spread);
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
        Voffset = 3*pipsize
        gap = ${spread}
        DPP = ${data.DPP} + gap
        DR1 = ${data.DR1} + gap
        DS1 = ${data.DS1} + gap
        DR2 = ${data.DR2} + gap
        DS2 = ${data.DS2} + gap
        DR3 = ${data.DR3} + gap
        DS3 = ${data.DS3} + gap
        WPP = ${data.WPP} + gap
        WR1 = ${data.WR1} + gap
        WS1 = ${data.WR1} + gap
        WR2 = ${data.WR2} + gap
        WS2 = ${data.WS2} + gap
        WR3 = ${data.WR3} + gap
        WS3 = ${data.WS3} + gap
        MPP = ${data.MPP} + gap
        MR1 = ${data.MR1} + gap
        MS1 = ${data.MS1} + gap
        MR2 = ${data.MR2} + gap
        MS2 = ${data.MS2} + gap
        MR3 = ${data.MR3} + gap
        MS3 = ${data.MS3} + gap
        DayHigh = ${data.DHigh} + gap
DayLow = 13017 + gap
DayClose = 13294 + gap
WHigh = 13105 + gap
WLow = 12743 + gap
WClose = 12802 + gap
MHigh = 12918 + gap
MLow = 12218 + gap
MClose = 12885 + gap
 
        DRAWTEXT("Pivot D F.",barindex-2,DPP+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DR1 F.",barindex-2,DR1+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DR2 F.",barindex-2,DR2+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DR3 F.",barindex-2,DR3+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DS1 F.",barindex-2,DS1+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DS2 F.",barindex-2,DS2+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("DS3 F.",barindex-2,DS3+Voffset,SansSerif,Bold,16)coloured(0,255,0)
        DRAWTEXT("Pivot W F.",barindex-2,WPP+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WR1 F.",barindex-2,WR1+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WR2 F.",barindex-2,WR2+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WR3 F.",barindex-2,WR3+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WS1 F.",barindex-2,WS1+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WS2 F.",barindex-2,WS2+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("WS3 F.",barindex-2,WS3+Voffset,SansSerif,Bold,16)coloured(0,0,255)
        DRAWTEXT("Pivot M F.",barindex-2,MPP+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WR1 F.",barindex-2,MR1+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WR2 F.",barindex-2,MR2+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WR3 F.",barindex-2,MR3+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WS1 F.",barindex-2,MS1+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WS2 F.",barindex-2,MS2+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("WS3 F.",barindex-2,MS3+Voffset,SansSerif,Bold,16)coloured(255, 192, 203)
        DRAWTEXT("Last Day High .F",barindex-2,DayHigh+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Day Low .F",barindex-2,DayLow+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Day Close .F",barindex-2,DayClose+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Week High .F",barindex-2,WHigh+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Week Low .F",barindex-2,WLow+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Week Close .F",barindex-2,WClose+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Month High .F",barindex-2,MHigh+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Month Low .F",barindex-2,MLow+Voffset,SansSerif,Bold,16)coloured(255,255,255)
        DRAWTEXT("Last Month Close .F",barindex-2,MClose+Voffset,SansSerif,Bold,16)coloured(255,255,255)

        RETURN DPP COLOURED(0,227,0) STYLE(line,3) AS"fDPP", DS1 COLOURED(0,227,0) STYLE(line,3) AS"fDS1", DR1 COLOURED(0,227,0) STYLE(line,3) AS"fDR1", DS2 COLOURED(0,227,0) STYLE(line,3) AS"fDS2", DR2 COLOURED(0,227,0) STYLE(line,3) AS"fDR2", DS3 COLOURED(0,227,0) STYLE(line,3) AS"fDS3", DR3 COLOURED(0,227,0) STYLE(line,3) AS"fDR3", WS3 COLOURED(0,191,255) STYLE(line,3) AS"fWS3", WS2 COLOURED(0,191,255) STYLE(line,3) AS"fWS2", WS1 COLOURED(0,191,255) STYLE(line,3) AS"fWS1", WPP COLOURED(0,191,255) STYLE(line,3) AS"fWPP", WR1 COLOURED(0,191,255) STYLE(line,3) AS"fWR1", WR2 COLOURED(0,191,255) STYLE(line,3) AS"fWR2", WR3 COLOURED(0,191,255) STYLE(line,3) AS"fWR3", MPP COLOURED(255,20,147) STYLE(line,3) AS"fMPP" , MS1 COLOURED(255,20,147) STYLE(line,3) AS"fMS1" , MR1 COLOURED(255,20,147) STYLE(line,3) AS"fMR1" , MS2 COLOURED(255,20,147) STYLE(line,3) AS"fMS2" , MR2 COLOURED(255,20,147) STYLE(line,3) AS"fMR2" , MS3 COLOURED(255,20,147) STYLE(line,3) AS"fMS3" , MR3 COLOURED(255,20,147) STYLE(line,3) AS"fMR3", DayHigh COLOURED(255,255,255) STYLE(line,3) AS"DHigh .F", DayLow COLOURED(255,255,255) STYLE(line,3) AS"DLow .F", DayClose COLOURED(255,255,255) STYLE(line,3) AS"DClose .F", WHigh COLOURED(255,255,255) STYLE(line,3) AS"WHigh .F", WLow COLOURED(255,255,255) STYLE(line,3) AS"DLow .F", WClose COLOURED(255,255,255) STYLE(line,3) AS"WClose .F", MHigh COLOURED(255,255,255) STYLE(line,3) AS"MHigh .F", MLow COLOURED(255,255,255) STYLE(line,3) AS"MLow .F", MClose COLOURED(255,255,255) STYLE(line,3) AS"MClose .F" 
        `}
      />
    </div>
  );
};

export default ProRealTime;

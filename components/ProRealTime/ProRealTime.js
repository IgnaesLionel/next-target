import React from "react";

const ProRealTime = ({ data, spread, market }) => {
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
        Voffset = 1*pipsize
        gap = 0 
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
DayLow = ${data.DLow} + gap
DayClose = ${data.DClose} + gap
WHigh = ${data.WHigh} + gap
WLow = ${data.WLow} + gap
WClose = ${data.WClose} + gap
MHigh = ${data.MHigh} + gap
MLow = ${data.MLow} + gap
MClose = ${data.MClose} + gap
 
        DRAWHLINE(DPP)coloured(0,227,0)
        DRAWHLINE(DR1)coloured(0,227,0)
        DRAWHLINE(DR2)coloured(0,227,0)
        DRAWHLINE(DR3)coloured(0,227,0)
        DRAWHLINE(DS1)coloured(0,227,0)
        DRAWHLINE(DS2)coloured(0,227,0)
        DRAWHLINE(DS3)coloured(0,227,0)
        DRAWHLINE(WPP)coloured(0,0,255)
        DRAWHLINE(WR1)coloured(0,0,255)
        DRAWHLINE(WR2)coloured(0,0,255)
        DRAWHLINE(WR3)coloured(0,0,255)
        DRAWHLINE(WS1)coloured(0,0,255)
        DRAWHLINE(WS2)coloured(0,0,255)
        DRAWHLINE(WS3)coloured(0,0,255)
        DRAWHLINE(MPP)coloured(255, 192, 203)
        DRAWHLINE(MR1)coloured(255, 192, 203)
        DRAWHLINE(MR2)coloured(255, 192, 203)
        DRAWHLINE(MR3)coloured(255, 192, 203)
        DRAWHLINE(MS1)coloured(255, 192, 203)
        DRAWHLINE(MS2)coloured(255, 192, 203)
        DRAWHLINE(MS3)coloured(255, 192, 203)

        DRAWTEXT("Pivot D ${market}.",barindex-2,DPP+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR1 ${market}",barindex-2,DR1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR2 ${market}",barindex-2,DR2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR3 ${market}",barindex-2,DR3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS1 ${market}",barindex-2,DS1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS2 ${market}",barindex-2,DS2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS3 ${market}",barindex-2,DS3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("Pivot W ${market}",barindex-2,WPP+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR1 ${market}",barindex-2,WR1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR2 ${market}",barindex-2,WR2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR3 ${market}",barindex-2,WR3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS1 ${market}",barindex-2,WS1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS2 ${market}",barindex-2,WS2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS3 ${market}",barindex-2,WS3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("Pivot M ${market}",barindex-2,MPP+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WR1 ${market}",barindex-2,MR1+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WR2 ${market}",barindex-2,MR2+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WR3 ${market}",barindex-2,MR3+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WS1 ${market}",barindex-2,MS1+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WS2 ${market}",barindex-2,MS2+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("WS3 ${market}",barindex-2,MS3+Voffset,SansSerif,Bold,10)coloured(255, 192, 203)
        DRAWTEXT("Last Day High ${market}",barindex-2,DayHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Day Low ${market}",barindex-2,DayLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Day Close ${market}",barindex-2,DayClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week High ${market}",barindex-2,WHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week Low ${market}",barindex-2,WLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week Close ${market}",barindex-2,WClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month High ${market}",barindex-2,MHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month Low ${market}",barindex-2,MLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month Close ${market}",barindex-2,MClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)

        RETURN DPP COLOURED(0,227,0) STYLE(line,3) AS"fDPP", DS1 COLOURED(0,227,0) STYLE(line,3) AS"fDS1", DR1 COLOURED(0,227,0) STYLE(line,3) AS"fDR1", DS2 COLOURED(0,227,0) STYLE(line,3) AS"fDS2", DR2 COLOURED(0,227,0) STYLE(line,3) AS"fDR2", DS3 COLOURED(0,227,0) STYLE(line,3) AS"fDS3", DR3 COLOURED(0,227,0) STYLE(line,3) AS"fDR3", WS3 COLOURED(0,191,255) STYLE(line,3) AS"fWS3", WS2 COLOURED(0,191,255) STYLE(line,3) AS"fWS2", WS1 COLOURED(0,191,255) STYLE(line,3) AS"fWS1", WPP COLOURED(0,191,255) STYLE(line,3) AS"fWPP", WR1 COLOURED(0,191,255) STYLE(line,3) AS"fWR1", WR2 COLOURED(0,191,255) STYLE(line,3) AS"fWR2", WR3 COLOURED(0,191,255) STYLE(line,3) AS"fWR3", MPP COLOURED(255,20,147) STYLE(line,3) AS"fMPP" , MS1 COLOURED(255,20,147) STYLE(line,3) AS"fMS1" , MR1 COLOURED(255,20,147) STYLE(line,3) AS"fMR1" , MS2 COLOURED(255,20,147) STYLE(line,3) AS"fMS2" , MR2 COLOURED(255,20,147) STYLE(line,3) AS"fMR2" , MS3 COLOURED(255,20,147) STYLE(line,3) AS"fMS3" , MR3 COLOURED(255,20,147) STYLE(line,2) AS"fMR3", DayHigh COLOURED(255,255,255) STYLE(line,2) AS"DHigh  ${market}", DayLow COLOURED(255,255,255) STYLE(line,2) AS"DLow  ${market}", DayClose COLOURED(255,255,255) STYLE(line,2) AS"DClose  ${market}", WHigh COLOURED(255,255,255) STYLE(line,2) AS"WHigh  ${market}", WLow COLOURED(255,255,255) STYLE(line,2) AS"DLow  ${market}", WClose COLOURED(255,255,255) STYLE(line,2) AS"WClose  ${market}", MHigh COLOURED(255,255,255) STYLE(line,2) AS"MHigh  ${market}", MLow COLOURED(255,255,255) STYLE(line,2) AS"MLow  ${market}", MClose COLOURED(255,255,255) STYLE(line,2) AS"MClose  ${market}" 
        `}
      />
    </div>
  );
};

export default ProRealTime;

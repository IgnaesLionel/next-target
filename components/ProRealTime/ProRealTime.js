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
        DRAWHLINE(MPP)coloured(36, 185, 255)
        DRAWHLINE(MR1)coloured(36, 185, 255)
        DRAWHLINE(MR2)coloured(36, 185, 255)
        DRAWHLINE(MR3)coloured(36, 185, 255)
        DRAWHLINE(MS1)coloured(36, 185, 255)
        DRAWHLINE(MS2)coloured(36, 185, 255)
        DRAWHLINE(MS3)coloured(36, 185, 255)

        DRAWHLINE(DayHigh)coloured(255,255,255)
        DRAWHLINE(DayLow)coloured(255,255,255)
        DRAWHLINE(DayClose)coloured(255,255,255)
        DRAWHLINE(WHigh)coloured(255,255,255)
        DRAWHLINE(WLow)coloured(255,255,255)
        DRAWHLINE(WClose)coloured(255,255,255)
        DRAWHLINE(MHigh)coloured(255,255,255)
        DRAWHLINE(MLow)coloured(255,255,255)
        DRAWHLINE(MClose)coloured(255,255,255)


        DRAWTEXT("Pivot D ${market}.",barindex+50,DPP+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR1 ${market}",barindex+50,DR1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR2 ${market}",barindex+500,DR2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DR3 ${market}",barindex+500,DR3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS1 ${market}",barindex+500,DS1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS2 ${market}",barindex+500,DS2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("DS3 ${market}",barindex+500,DS3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
        DRAWTEXT("Pivot W ${market}",barindex+500,WPP+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR1 ${market}",barindex+50,WR1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR2 ${market}",barindex+50,WR2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WR3 ${market}",barindex+50,WR3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS1 ${market}",barindex+50,WS1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS2 ${market}",barindex+50,WS2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("WS3 ${market}",barindex+50,WS3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
        DRAWTEXT("Pivot M ${market}",barindex+50,MPP+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WR1 ${market}",barindex+50,MR1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WR2 ${market}",barindex+50,MR2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WR3 ${market}",barindex+50,MR3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WS1 ${market}",barindex+50,MS1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WS2 ${market}",barindex+50,MS2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("WS3 ${market}",barindex+50,MS3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
        DRAWTEXT("Last Day High ${market}",barindex+50,DayHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Day Low ${market}",barindex+50,DayLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Day Close ${market}",barindex+50,DayClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week High ${market}",barindex+50,WHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week Low ${market}",barindex+50,WLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Week Close ${market}",barindex+50,WClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month High ${market}",barindex+50,MHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month Low ${market}",barindex+50,MLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
        DRAWTEXT("Last Month Close ${market}",barindex+50,MClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)

        RETURN
        `}
      />
    </div>
  );
};

export default ProRealTime;

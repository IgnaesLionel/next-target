import React, { useState} from 'react';

const ProRealTime = ({ data, spread, market }) => {

  const [commentText, setCommentText] = useState(`
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
  WS1 = ${data.WS1} + gap
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

  mDR1 = ${(data.DPP+data.DR1)/2} + gap
  mDS1 = ${(data.DPP+data.DS1)/2} + gap
  mDR2 = ${(data.DR1+data.DR2)/2} + gap
  mDS2 = ${(data.DS1+data.DS2)/2} + gap
  mDR3 = ${(data.DR2+data.DR3)/2} + gap
  mDS3 = ${(data.DS2+data.DS3)/2} + gap

  mWR1 = ${(data.WPP+data.WR1)/2} + gap
  mWS1 = ${(data.WPP+data.WS1)/2} + gap
  mWR2 = ${(data.WR1+data.WR2)/2} + gap
  mWS2 = ${(data.WS1+data.WS2)/2} + gap
  mWR3 = ${(data.WR2+data.WR3)/2} + gap
  mWS3 = ${(data.WS2+data.WS3)/2} + gap

  mMR1 = ${(data.MPP+data.MR1)/2} + gap
  mMS1 = ${(data.MPP+data.MS1)/2} + gap
  mMR2 = ${(data.MR1+data.MR2)/2} + gap
  mMS2 = ${(data.MS1+data.MS2)/2} + gap
  mMR3 = ${(data.MR2+data.MR3)/2} + gap
  mMS3 = ${(data.MS2+data.MS3)/2} + gap

  DayHigh = ${data.DHigh} + gap
  DayLow = ${data.DLow} + gap
  DayClose = ${data.DClose} + gap
  DMiddle = ${(data.DHigh+data.DLow)/2} + gap
  WHigh = ${data.WHigh} + gap
  WLow = ${data.WLow} + gap
  WClose = ${data.WClose} + gap
  WMiddle = ${(data.WHigh+data.WLow)/2} + gap
  MHigh = ${data.MHigh} + gap
  MLow = ${data.MLow} + gap
  MClose = ${data.MClose} + gap
  MMiddle = ${(data.MHigh+data.MLow)/2} + gap


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

  DRAWHLINE(mWR1)coloured(0,0,255)
  DRAWHLINE(mWR2)coloured(0,0,255)
  DRAWHLINE(mWR3)coloured(0,0,255)
  DRAWHLINE(mWS1)coloured(0,0,255)
  DRAWHLINE(mWS2)coloured(0,0,255) 
  DRAWHLINE(mWS3)coloured(0,0,255)

  DRAWHLINE(mMR1)coloured(36, 185, 255)
  DRAWHLINE(mMR2)coloured(36, 185, 255)
  DRAWHLINE(mMR3)coloured(36, 185, 255)
  DRAWHLINE(mMS1)coloured(36, 185, 255)
  DRAWHLINE(mMS2)coloured(36, 185, 255) 
  DRAWHLINE(mMS3)coloured(36, 185, 255)

  DRAWHLINE(DayHigh)coloured(255,255,255)
  DRAWHLINE(DayLow)coloured(255,255,255)
  DRAWHLINE(DayClose)coloured(255,255,255)
  DRAWHLINE(WHigh)coloured(255,255,255)
  DRAWHLINE(WLow)coloured(255,255,255)
  DRAWHLINE(WClose)coloured(255,255,255)
  DRAWHLINE(MHigh)coloured(255,255,255)
  DRAWHLINE(MLow)coloured(255,255,255)
  DRAWHLINE(MClose)coloured(255,255,255)
  DRAWHLINE(DMiddle)coloured(255,255,0)
  DRAWHLINE(MMiddle)coloured(255,255,0)
  DRAWHLINE(WMiddle)coloured(255,255,0)

  DRAWTEXT("mDR1 ${market}",barindex+10,mDR1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("mDR2 ${market}",barindex+10,mDR2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("mDR3 ${market}",barindex+10,mDR3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("mDS1 ${market}",barindex+10,mDS1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("mDS2 ${market}",barindex+10,mDS2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("mDS3 ${market}",barindex+10,mDS3+Voffset,SansSerif,Bold,10)coloured(0,255,0)

  DRAWTEXT("Pivot W ${market}",barindex+10,WPP+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WR1 ${market}",barindex+10,WR1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WR2 ${market}",barindex+10,WR2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WR3 ${market}",barindex+10,WR3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WS1 ${market}",barindex+10,WS1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WS2 ${market}",barindex+10,WS2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("WS3 ${market}",barindex+10,WS3+Voffset,SansSerif,Bold,10)coloured(0,0,255)

  DRAWTEXT("mWR1 ${market}",barindex+10,mWR1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("mWR2 ${market}",barindex+10,mWR2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("mWR3 ${market}",barindex+10,mWR3+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("mWS1 ${market}",barindex+10,mWS1+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("mWS2 ${market}",barindex+10,mWS2+Voffset,SansSerif,Bold,10)coloured(0,0,255)
  DRAWTEXT("mWS3 ${market}",barindex+10,mWS3+Voffset,SansSerif,Bold,10)coloured(0,0,255)

  DRAWTEXT("Pivot M ${market}",barindex+10,MPP+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MR1 ${market}",barindex+10,MR1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MR2 ${market}",barindex+10,MR2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MR3 ${market}",barindex+10,MR3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MS1 ${market}",barindex+10,MS1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MS2 ${market}",barindex+10,MS2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("MS3 ${market}",barindex+10,MS3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)

  DRAWTEXT("mMR1 ${market}",barindex+10,mMR1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("mMR2 ${market}",barindex+10,mMR2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("mMR3 ${market}",barindex+10,mMR3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("mMS1 ${market}",barindex+10,mMS1+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("mMS2 ${market}",barindex+10,mMS2+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)
  DRAWTEXT("mMS3 ${market}",barindex+10,mMS3+Voffset,SansSerif,Bold,10)coloured(36, 185, 255)

  DRAWTEXT("Last Day High ${market}",barindex+10,DayHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Day Low ${market}",barindex+10,DayLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Day Close ${market}",barindex+10,DayClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Week High ${market}",barindex+10,WHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Week Low ${market}",barindex+10,WLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Week Close ${market}",barindex+10,WClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Month High ${market}",barindex+10,MHigh+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Month Low ${market}",barindex+10,MLow+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Last Month Close ${market}",barindex+10,MClose+Voffset,SansSerif,Bold,10)coloured(255,255,255)

  DRAWTEXT("Middle Last Day ${market}",barindex+10,DMiddle+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Middle Last Week ${market}",barindex+10,WMiddle+Voffset,SansSerif,Bold,10)coloured(255,255,255)
  DRAWTEXT("Middle Last Month ${market}",barindex+10,MMiddle+Voffset,SansSerif,Bold,10)coloured(255,255,255)

  DRAWTEXT("Pivot D ${market}.",barindex+10,DPP+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DR1 ${market}",barindex+10,DR1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DR2 ${market}",barindex+10,DR2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DR3 ${market}",barindex+10,DR3+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DS1 ${market}",barindex+10,DS1+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DS2 ${market}",barindex+10,DS2+Voffset,SansSerif,Bold,10)coloured(0,255,0)
  DRAWTEXT("DS3 ${market}",barindex+10,DS3+Voffset,SansSerif,Bold,10)coloured(0,255,0)

  RETURN DR1 coloured(0,255,0) style(line,1) as "DR1",  DR2 coloured(0,255,0) style(line,1) as "DR2", DR3 coloured(0,255,0) style(line,1) as "DR3", DS1 coloured(0,255,0) style(line,1) as "DS1",  DS2 coloured(0,255,0) style(line,1) as "DS2", DS3 coloured(0,255,0) style(line,1) as "DS3", mDR1 coloured(0,255,0) style(line,1) as "mDR1",  mDR2 coloured(0,255,0) style(line,1) as "mDR2", mDR3 coloured(0,255,0) style(line,1) as "mDR3", mDS1 coloured(0,255,0) style(line,1) as "mDS1",  mDS2 coloured(0,255,0) style(line,1) as "mDS2", mDS3 coloured(0,255,0) style(line,1) as "mDS3"
  `)

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
      <label for="ProRealTime"></label>
    
      <textarea
        readOnly
        id="ProRealTime"
        name="ProRealTime"
        rows="5"
        cols="33"
        value={`${commentText}`}
      />
        <button  className="copyBtn" onClick={()=> copy()}>Copy</button>
    </div>
  );
};

export default ProRealTime;

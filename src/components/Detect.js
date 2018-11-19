import React from 'react'
import { Detector } from 'react-detect-offline'

const Detect = () => (
  <Detector
  render={({ online }) => (
    <div className={online ? "normal" : "warning"}>
      You are currently {online ? "online" : "offline"}
    </div>
  )}
/>
)

export default Detect

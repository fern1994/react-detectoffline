import React from 'react'
import { Online, Offline } from 'react-detect-offline'

const Online_Offline = () => (
  <div>
    <Online>Only shown when you're online</Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>
)

export default Online_Offline
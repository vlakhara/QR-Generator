import { QrCode2 } from "@mui/icons-material"
import React from "react"
import "./Header.css"
const Header = () => {
  return (
    <div className="header">
      <QrCode2 fontSize="large" />
      <p className="text">qr-gen</p>

      <p className="me">Vipul Lakhara</p>
    </div>
  )
}

export default Header

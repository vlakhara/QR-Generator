import { QrCode2 } from "@mui/icons-material"
import React from "react"
import styles from "./Header.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
      <QrCode2 fontSize="large" />
      <p className={styles.text}>qr-gen</p>
      <p className={styles.me}>Vipul Lakhara</p>
    </div>
  )
}

export default Header

import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import QRActions from "./components/QRActions"
import styles from "./App.module.css"
const App = () => {
  const [string, setString] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/vipullakhara/"
  )
  const [link, setLink] = useState()

  const setQrData = (data) => {
    setString(data)
  }
  useEffect(() => {
    const getQr = async () => {
      const data = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${string}`
      )
      setLink(data?.url)
    }
    getQr()
  }, [string])
  return (
    <div className={styles.app}>
      <Header />
      <QRActions getQrData={setQrData} url={link} />
    </div>
  )
}

export default App

import React, { useEffect, useRef, useState } from "react"
import styles from "./Generator.module.css"
import MyQr from "../assets/myQr.png"
import { saveAs } from "file-saver"

const Generator = ({ getQrData, url }) => {
  const dataRef = useRef()
  useEffect(() => {
    dataRef.current.focus()
  })
  const [data, setData] = useState("")
  const setString = (event) => {
    setData(event.target.value)
  }
  const setQrData = () => {
    getQrData(data)
  }
  const onKeyPress = (event) => {
    if (event.keyCode === 13) {
      setQrData()
    }
  }
  const downloadQr = () => {
    saveAs(url, "myQr.png")
    dataRef.current.value = ""
  }
  return (
    <div className={styles.generator}>
      <div className={styles.inputControl}>
        <input
          className={styles.input}
          type="text"
          ref={dataRef}
          onChange={setString}
          onKeyDownCapture={onKeyPress}
          placeholder="Enter Text or URL"
        />
        <button className={styles.generate} onClick={setQrData}>
          Generate
        </button>
        <img className={styles.qrImage} src={url || MyQr} alt="QR CODE" />
        <button className={styles.download} onClick={downloadQr}>
          Download
        </button>
      </div>
      <div className={styles.qrcode}></div>
    </div>
  )
}

export default Generator

import React, { useEffect, useRef, useState } from "react"
import "./QRActions.css"
import MyQr from "../assets/myQr.png"
import { saveAs } from "file-saver"

const QRActions = ({ getQrData, url }) => {
  const [generate, setGenerate] = useState("active")
  const [scan, setScan] = useState("")
  const [scanOpen, setScanOpen] = useState(false)
  const [qrLink, setQrLink] = useState("")

  const dataRef = useRef()
  useEffect(() => {
    !scanOpen && dataRef.current.focus()
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
  const handleGenerate = () => {
    setGenerate("active")
    setScan("")
    setScanOpen(false)
  }
  const handleScan = () => {
    setScan("active")
    setGenerate("")
    setScanOpen(true)
  }
  const handleImageUpload = (event) => {
    const image = event.target.files[0]
    setQrLink(URL.createObjectURL(image))
  }
  console.log(qrLink)
  return (
    <div className="content">
      <div className="actions">
        <button className={`menuBtn1 ${generate}`} onClick={handleGenerate}>
          Generate
        </button>
        <button className={`menuBtn2 ${scan}`} onClick={handleScan}>
          Scan
        </button>
      </div>
      {!scanOpen ? (
        <div className="generator" key={"generator"}>
          <input
            className="input"
            type="text"
            ref={dataRef}
            onChange={setString}
            onKeyDownCapture={onKeyPress}
            placeholder="Enter Text or URL"
          />
          <button className="generate" onClick={setQrData}>
            Generate
          </button>
          <img className="qrImage" src={url || MyQr} alt="QR CODE" />
          <button className="download" onClick={downloadQr}>
            Download
          </button>
        </div>
      ) : (
        <div className="scanner">
          {/* <input type="file" onChange={handleImageUpload} />
          <img src={qrLink} sizes="5rem 5rem" alt="asdasd" /> */}
          <h1>In Progress...</h1>
        </div>
      )}
    </div>
  )
}
export default QRActions

import React from 'react'
import styles from './DownloadLink.module.css'

const pdfPath = "/Federico Cavazzoli-CV.pdf"

function DownloadLink() {
  return (
    <div>
      <a className={styles.DownloadLink} href={pdfPath} download>
        Check out my CV
      </a>
    </div>
  )
}

export default DownloadLink
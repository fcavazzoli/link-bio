import React from 'react'
import styles from './DownloadLink.module.css'

const pdfPath = "https://drive.google.com/file/d/1HsoHo556eQz5Nh0jN8oo8bVJV2NQ7VRZ/view"

function DownloadLink({ name, href }) {
  return (
    <div className={styles.DownloadLink}>
      <a href={pdfPath} target="_blank" >
        Check out my CV
      </a>
    </div>
  )
}

export default DownloadLink
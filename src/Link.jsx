import React from 'react'
import styles from './Link.module.css'

function Link({ name, href }) {
  let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <a className={styles.Link} href={href}>
      {capitalizedName}
    </a>
  )
}

export default Link
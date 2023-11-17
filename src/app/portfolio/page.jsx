import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose </h1>
      <div className={styles.items}>

        <Link className={styles.item} href="/portfolio/illustrations">
        <span className={styles.title}>Illustartions</span>
        </Link>

        <Link className={styles.item} href="/portfolio/illustrations">
        <span className={styles.title}>Websites</span>
        </Link>

        <Link className={styles.item} href="/portfolio/illustrations">
        <span className={styles.title}>Applications</span>
        </Link>

      </div>
    </div>
  )
}

export default Portfolio

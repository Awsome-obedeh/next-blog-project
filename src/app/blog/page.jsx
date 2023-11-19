import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.imgHolder}>
          <Link href="/blog/blogId">
            <Image className={styles.img} src="https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-stream-in-a-canyon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill={true}></Image>

          </Link>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>In a twinkle of am eye, the moste feared man dropped down and all were in awe...</h2>
          <p className={styles.desc}>And as they all looked, some lost , not getting the new picture that has been paineted, he took the playful clouds and made them piercing clouds</p>
        </div>

      </div>
      <div className={styles.subContainer}>
        <div className={styles.imgHolder}>
          <Link href="/blog/blogId">
            <Image className={styles.img} src="https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-stream-in-a-canyon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill={true}></Image>

          </Link>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>In a twinkle of am eye, the moste feared man dropped down and all were in awe...</h2>
          <p className={styles.desc}>And as they all looked, some lost , not getting the new picture that has been paineted, he took the playful clouds and made them piercing clouds</p>
        </div>

      </div>
    </div>
  )
}

export default Blog

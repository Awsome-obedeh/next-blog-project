import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

// next provides two ways of fetching data
/* 1 .the client side renders the componenet first before data fetching 
2. The server side

if your data never changes, we use static fetching {cache:'force-cahche}
if you rarely make changes to your data, then we can use {revalidate:10}
{if you want to fetch data all the data, use {cache:no-store}
*/

const Blog = async () => {
  async function getData() {
    try {

      const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-store"
      })
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
      }
      return res.json()
    }
    catch (err) {
      console.log(err);

    }
  }
  const datas = await getData()
  return (
    <div className={styles.container}>
      {
        datas && datas.map((data) => {
          return (
            <div className={styles.subContainer} key={data._id}>
              <div className={styles.imgHolder}>
                <Link href={`/blog/${data._id}`}>
                  <Image className={styles.img} src={data.img} fill={true} alt="images"></Image>

                </Link>
              </div>

              <div className={styles.content}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.desc}>{data.desc}</p>
              </div>


            </div>

          )
        })
      }

    </div>
  )


}

export default Blog

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
_
const Blog = async () => {
  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const datas = await getData()
  return (
    <div className={styles.container}>
      {
        datas && datas.map((data) => {
          return (
            <div className={styles.subContainer} key={data.id}>
              <div className={styles.imgHolder}>
                <Link href={`/blog/${data.id}`}>
                  <Image className={styles.img} src="https://images.pexels.com/photos/19068893/pexels-photo-19068893/free-photo-of-stream-in-a-canyon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" fill={true} alt="images"></Image>

                </Link>
              </div>

              <div className={styles.content}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.desc}>{data.body}</p>
              </div>


            </div>

          )
        })
      }
    
    </div>
  )

  
}

export default Blog

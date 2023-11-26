import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function getData(id) {
  try{
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
      cache:'no-store'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return notFound
    }
    else {
      console.log("worked");
      return res.json()
    }

  }
  catch(err){
    console.log(err);
  }

}
const BlogPost = async ({ params }) => {

  const id = params.id

  const post = await getData(id)
  console.log(post);




  return (
    <div className={styles.container}>
          {post && (
            <div className={styles.wrapper} >
              <div className={styles.title}>
                <h2 className={styles.title}>{post.desc}</h2>
                <p className={styles.desc}>{post.username}</p>
    
                <div className={styles.authorWrapper}>
                  <Image
                    className={styles.authorImg}
                    width={30}
                    height={30}
                    alt="image"
                    src={post.img}
                    
                  ></Image>
                  <p className={styles.authorName}>ObedDina</p>
                </div>
              </div>
              <div className={styles.imgHolder}>
                <Image
                  className={styles.img}
                  fill={true}
                  alt="image"
                  src={post.img}
                />
              </div>
            </div>
          )}
          <p className={styles.blog}>
           {post.desc}
          </p>
        </div>

  ) 
         
        
    
   
 
}

export default BlogPost



import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>

            <h2 className={styles.title}> In a twinkle of am eye, the moste feared man dropped down and all were in awe... </h2>
            <p className={styles.desc}>And as they all looked, some lost , not getting the new picture that has been paineted, he took the playful clouds and made them piercing clouds</p>
           
            <div className={styles.authorWrapper}>
              <Image className={styles.authorImg} width={20} height={30} src="https://images.pexels.com/photos/4467064/pexels-photo-4467064.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='author image'></Image>
              <p className={styles.authorName}>ObedDina</p>
            </div>

          </div>
          <div className={styles.imgHolder}>
            <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
          </div>

        </div>
          <p className={styles.blog}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium illum sapiente obcaecati unde a quia consequuntur enim cum, iste, saepe adipisci quaerat rerum quibusdam nobis porro laboriosam. Similique, iure.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eveniet asperiores ullam sunt quasi, ducimus suscipit iure magnam veniam quaerat, excepturi deleniti vel delectus labore quod laudantium ab quis veritatis.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem explicabo eligendi? Corrupti quam odio quos error quae sint, enim, earum molestias et magni aliquid ipsum cumque, saepe fuga dolor.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio laudantium autem iure totam deleniti? Ullam ea incidunt rem laudantium corrupti adipisci nihil ducimus ut, in esse tenetur numquam sequi?
          lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet reprehenderit a porro sed pariatur commodi labore earum perspiciatis qui! Sed soluta ea ducimus natus, culpa iure voluptatum commodi itaque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique natus quia delectus dolorem quod voluptatum, qui odit repellat exercitationem cupiditate distinctio veritatis eligendi praesentium voluptas facilis eos magni. Consectetur.</p>
      </div>
    </div>
  )
}

export default BlogPost

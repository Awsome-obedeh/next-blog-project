import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/page'

const Contact = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Let's Connect</h1>
      <div className={styles.content}> 
        <div className={styles.imgHolder}>
          <Image
          src="https://images.unsplash.com/photo-1622547718778-3462e4256fbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGNhbGx8ZW58MHx8MHx8fDA%3D"
          fill={true}
          className={styles.img} 
          />
        </div>

        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea placeholde="your message "className={styles.textArea}name="" id="" cols="30" rows="10"></textarea>
          <Button url="" title="Submit"/>
        </form>
      </div>
      
    </div>
  )
}

export default Contact

import Button from '@/components/button/page'
import styles from './page.module.css'
import Image from 'next/image'

export default function Category({ params }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.cartTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Sample</h1>
                    <p className={styles.desc}>Solid Sample Lorem ip
                    sum dolor sit amet consectetur adipisicing elit. 
                    Placeat odit amet nostrum beatae praesentium haru
                    m non itaque saepe est! Illo perspiciatis dolorem ducimus ea odio nulla h
                    ic consequatur eveniet omnis?</p>
                    <Button title="See More" url="#"></Button>
                </div>

                <div className={styles.imgHolder}>
                    <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></Image>

                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Sample</h1>
                    <p className={styles.desc}>Solid Sample Lorem ip
                    sum dolor sit amet consectetur adipisicing elit. 
                    Placeat odit amet nostrum beatae praesentium haru
                    m non itaque saepe est! Illo perspiciatis dolorem ducimus ea odio nulla h
                    ic consequatur eveniet omnis?</p>
                    <Button title="See More" url="#"></Button>
                </div>

                <div className={styles.imgHolder}>
                    <Image className={styles.img} fill={true} src="https://images.pexels.com/photos/15118791/pexels-photo-15118791/free-photo-of-a-person-holding-a-picture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"></Image>

                </div>
            </div>


        </div>
    )
}
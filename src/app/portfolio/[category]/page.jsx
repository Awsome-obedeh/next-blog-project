import Button from '@/components/button/page'
import styles from './page.module.css'
import Image from 'next/image'
import { items } from './data'
import { notFound } from 'next/navigation'


const getData = (category) => {

    const data = items[category]
    if (data) {
        return data
    }
    else {
        return notFound()
    }
}
export default function Category({ params }) {
    const datas = getData(params.category)

    return (  
    
        <div className={styles.container}><div className={styles.item}>
            <h1 className={styles.cartTitle}>{params.category}</h1>

            {


                datas.map((data) => {
                    return (
                        <div>
                            <div className={styles.content}>
                                <h1 className={styles.title}>{data.title}</h1>
                                <p className={styles.desc}>{data.desc}</p>
                                <Button title="See More" url="#"></Button>
                            </div>

                            <div className={styles.imgHolder}>
                                <Image alt="porfolio " className={styles.img} fill={true} src={data.image}></Image>

                            </div>
                        </div>



                    )
                })
            }
        </div>

    </div>
    )
}


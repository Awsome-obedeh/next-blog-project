import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/button/page"
export const metadata = {
    title: 'Awsome Blogs | About',
    description: 'This is Awesome Blogs',
  }
export default function About() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgHolder}>
                    <Image src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVybyUyMGltYWdlfGVufDB8fDB8fHww"
                        className={styles.img}
                        fill={true}
                        alt="about image"
                    />

                    <div className={styles.imgText}>
                        <h1 className={styles.imgTitle}>Digital Wanderers</h1>
                        <h2 className={styles.imgDesc}>Walking and making Impact</h2>
                    </div>
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.item}>
                        <h1 className>What we do</h1>
                        <p className={styles.desc}>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!
                                <br/>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!

                                <br></br>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!
                        </p>
                    </div>
                    <div className={styles.item}>
                        <h1 className>What we do</h1>
                        <p className={styles.desc}>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!
                                <br></br>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!

                                <br></br>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!
                        </p>
                        <Button url="/contact" title="Reach Us"/>
                    </div>

                    {/* <div className={styles.item}>
                        <h1 className>What we do</h1>
                        <p>

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!

                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!


                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto accusamus nihil culpa dicta esse sapiente eaque,             e ipsam nesciunt mollitia modi tempora quos amet!
                        </p>
                        <Button url="/contact" title="Reach Us"/>
                    </div> */}

                </div>
            </div>
        </>
    )
}
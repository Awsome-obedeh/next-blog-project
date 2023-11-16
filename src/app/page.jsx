import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heroText}>
          Passion Brought Us Thus Far, No Going Back
        </h1>

        <p className={styles.heroSubText}>
          Getting Up and Getting the Job done, That is what we are made up of
        </p> 

        <button className={styles.heroBtn}>See More</button>

      </div>
      <div className={styles.imgHolder}>
        <Image
          width={600}
          height={500}
          className={styles.img}
          alt={"hero image"}
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVybyUyMGltYWdlfGVufDB8fDB8fHww"
          ></Image>
      </div>
      <h1>Home</h1>
    </div>
  );
}

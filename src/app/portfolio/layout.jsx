import styles from "./page.module.css"

export default function Layout({children}){
    return(
        <div className="">
            <h1 className={styles.mainTitle}>OUR WORKS</h1>
            {children}
        </div>
    )
}
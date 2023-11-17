import Link from "next/link";
import styles from "./page.module.css"

export default function Button({title,url}){
    return(
        <Link href={url}>
        <button className={styles.btn}>{title} </button>
        
        </Link>
    )
}
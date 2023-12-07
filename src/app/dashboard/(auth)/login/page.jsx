"use client"

import { signIn, useSession  } from "next-auth/react";
import styles from "./page.module.css"
import axios from "axios";
export default function Login(){
   
   async function submitHandler(e){
    e.preventDefault()
       const email=e.target[0].value;
        const password=e.target[1].value

      
    //    send credentials
       signIn("credentials", {email,password})

    }
    return(
        <div className={styles.container}>
            <form action=""className={styles.form} onSubmit={submitHandler}>
                
                <input type="email" className={styles.input} required placeholder="Email" />
                <input type="password" className={styles.input} required placeholder="Password" />

                <button className={styles.button}>Login</button>
                
            </form>
            (<button onClick={()=>signIn("google")}>Login</button>)
        </div>
    )
}
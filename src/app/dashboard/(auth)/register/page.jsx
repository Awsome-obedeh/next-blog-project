"use client"

import Link from "next/link"
import styles from './page.module.css'
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router=useRouter()
    const [error, setError]=useState(false);
    //  send user data to api
    const submitHandler= async (e)=>{
        e.preventDefault();

        const name=e.target[0].value;
        const email=e.target[1].value
        const password=e.target[2].value

        console.log(name, email, password);
        try{
            const res=await axios.post('/api/auth/register/', {
                name,email,password
            })

            res.status===201 && router.push('/dashboard/login?success="Account has been created successfully');

        }

        catch(err){
            console.log(err);
            setError(true)

        }
    }
    return (
        <div className={styles.container}>
            <form action=""className={styles.form}  onSubmit={submitHandler}>
                <input type="text" className={styles.input} required placeholder="Username" />
                <input type="email" className={styles.input} required placeholder="Email" />
                <input type="password" className={styles.input} required placeholder="Password" />

                <button className={styles.button}>Register</button>
                
            </form>

            <Link href="/dashboard/login" className={styles.link}>Login With an existing account</Link>

            {error & <h1>{`something went wrong ${error}`}</h1> }
        </div>
    )
}
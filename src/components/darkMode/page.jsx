"use client"

// import { FaMoon,FaSun,FaBaseball } from "react-icons/fa6";
// import styles from './page.module.css'
// import { useContext } from "react";
// import { ThemeContext } from "@/context/themProvider";


// export default function DarkMode(){
//     const {toogleMode, mode}=useContext(ThemeContext)
    
//     return(

//         <div className={styles.container}>
//             <div className={styles.icon}><FaMoon/></div>
//             <div className={styles.icon} styles={{textAlign:"center"}}><FaSun/></div>
//             <div className={styles.ball} style={mode === "dark"? {left:'2px'} :{ right:'2px'}} onClick={toogle}></div>


//         </div>
//     )
// }

import { FaMoon, FaSun } from "react-icons/fa6";
import styles from './page.module.css';
import { useContext } from "react";
import { ThemeContext } from "@/context/themProvider";

export default function DarkMode() {
  const  {toggleMode,mode} = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}><FaMoon /></div>
      <div className={styles.icon} styles={{ textAlign: "center" }}><FaSun /></div>
      <div className={styles.ball} style={mode === "dark" ? { left: '2px' } : { right: '2px' }} ></div>
    </div>
  );
}

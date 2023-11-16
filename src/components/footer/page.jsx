import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>@ Awsome Blogs</h2>
      </div>

      <div className={styles.imgHolder}>
        <Image
          src="https://images.unsplash.com/photo-1690138871287-02b2fc3b87c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHNvY2lhbCUyMGljb25zfGVufDB8fDB8fHww"
          alt="footer"
          width={35}
          height={45}
          className={styles.socials}
        ></Image>
        
        <Image
          src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvY2lhbCUyMGljb25zfGVufDB8fDB8fHww"
          alt="footer"
          width={35}
          height={45}
          className={styles.socials}
        ></Image>
      </div>
    </div>
  );
};

export default Footer;

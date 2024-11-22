import Head from 'next/head';
import { Image } from 'next/image';
import styles from "./layout.module.css";
import  utilStyles  from '../styles/utils.module.css';


const name = "Dingu";
export const siteTitle = "Next.js blog";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        <img src="/images/icon_hinoarashi.png" className={utilStyles.borderCircle}></img>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
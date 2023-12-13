import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Wallet from './wallet.page';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prime Mates Christmas Club Mint</title>
        <meta name="description" content="" />
        <link href="/icon.png" rel="icon" type="image/x-icon"/>
      </Head>

      <main className={styles.main}>

        <Wallet />
        
      </main>

      <img src="/bottomImg.png" alt="Logo" className={styles.bottomImg} />

      <footer className={styles.footer}>
        <Link href="https://opensea.io/collection/prime-mates-christmas-club" rel="noopener noreferrer" target="_blank">
          <img src="/opensea_icon.png" alt="OpenSea" className={styles.footerLogo} />
        </Link>
        <Link href="https://polygonscan.com/address/0xAb9f149A82C6ad66C3795FBceb06ec351b13cfcf" rel="noopener noreferrer" target="_blank">
          <img src="/eth_icon.png" alt="Etherscan" className={styles.footerLogo} />
        </Link>
        <Link href="https://twitter.com/PrimeMatesBC" rel="noopener noreferrer" target="_blank">
          <img src="/x_icon.png" alt="Twitter" className={styles.footerLogo} />
        </Link>
      </footer>
    </div>
  );
};

export default Home;

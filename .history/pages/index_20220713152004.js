import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physical NFTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Buy My Physical NFTs
        </h1>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/Images/NFT 1.png" alt="NFT" width={400} height={400}/>
            <p>Very Expensive Art Piece 1</p>
          </a>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src="/Images/NFT 2.png" alt="NFT" width={400} height={400}/>
            <p>Very Expensive Art Piece 2</p>
          </a>
        </div>
      </main>
    </div>
  )
}

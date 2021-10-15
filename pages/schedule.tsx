import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { NextAuthPage } from '../utils/authTypings'

const SchedulePage: NextAuthPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Signed in!</title>
      </Head>

      <main className="justify-center">
        <h1 className="font-bold">
          Congrats on signing In
        </h1>

        <div className="grid">
          <div className="col-span-1">
            🎉
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        RPI Ambulance 2022
      </footer>
    </div>
  )
}

// Make it require auth by adding auth information
SchedulePage.authOptions = { requiresAuth: true };

export default SchedulePage;

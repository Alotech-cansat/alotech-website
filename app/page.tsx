import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section id ="welcome_section" className = {styles.welcome_section}>

        <h1>ALOTECH</h1>
        <Image 
          src = "/logo.png"
          width ={600}
          height = {600}
          alt = "out logo">

        </Image>
      </section>
      <section></section>
    </main>
  )
}

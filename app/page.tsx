import Image from 'next/image'
import styles from './page.module.css'
import {Member} from "./components/member"


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
      <section className={styles.us} id ="about-us">
        <h1>MEET US</h1>
        <div className={styles.us_images}>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Bibi"></Member>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Kari"></Member>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Bibi"></Member>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Kari"></Member>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Bibi"></Member>
          <Member member = {"/logo.png"} member_hobby = {"/2001.png"} name = "Kari"></Member>
        </div>
      </section>

      <section id = "our-cansat" className={styles.cansat}>
      <h1>OUR CANSAT</h1>
      </section>
      <section id = "contact" className={styles.contact}>
      <h1>CONTACT</h1>
      <div className={styles.contacts_wrap}>
        <a href="mailto:"> nasz mail</a>
        <a href="https://www.instagram.com/alotech_cansat2023/">our instgram</a>
      </div>

      </section>
    </main>
  )
}

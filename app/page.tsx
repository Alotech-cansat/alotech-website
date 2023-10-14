import Image from 'next/image'
import styles from './page.module.css'
import {Member} from "./components/member"

const prefix =  process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
    <main className={styles.main}>
      <section id ="welcome_section" className = {styles.welcome_section}>

        <h1>ALOTECH</h1>
        <Image 
          src = {`${prefix}/logo.png`}
          width ={600}
          height = {600}
          alt = "out logo">

        </Image>

      </section>
      <section className={styles.us} id ="about-us">
        <h1>MEET US</h1>
        <div className={styles.us_images}>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Błażej Bolek" role = "Team leader"></Member>
          <Member member = {`${prefix}/karina.jpg`} member_hobby = {`${prefix}/karina-hobby.jpg`} name = "Karina Leśkiewicz" role = "Outreach Manager"></Member>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Stanisław Kawulok" role = "Software developer"></Member>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Emilia Grygorowicz " role = "Mechanical Leading Engineer"></Member>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Grzegorz Diaconescu" role = "Data Analysis / Physics Expert"></Member>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Kajetan Kwiecień" role = "Electrical Engineer"></Member>
        </div>
      </section>

      <section id = "our-cansat" className={styles.cansat}>
      <h1>OUR CANSAT</h1>
      </section>
      <section id = "contact" className={styles.contact}>
      <h1>CONTACT</h1>
      <div className={styles.contacts_wrap}>
        <a href="mailto:alotech.cansat2023@gmail.com"> nasz mail</a>
        <a href="https://www.instagram.com/alotech_cansat2023/">our instgram</a>
      </div>

      </section>
    </main>
  )
}

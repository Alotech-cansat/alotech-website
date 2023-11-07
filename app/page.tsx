import Image from 'next/image'
import styles from './page.module.css'
import {Member} from "./components/member"

const prefix =  process.env.NEXT_PUBLIC_BASE_PATH || '/alotech/';

export default function Home() {
  return (
    <main className={styles.main}>
      <section id ="welcome_section" className = {styles.welcome_section}>


        <Image 
          src = {`${prefix}/logo.png`}
          width ={600}
          height = {600}
          alt = "our logo">

        </Image>
        <h1>ALOTECH</h1>

      </section>
      <section className={styles.us} id ="about-us">
        <h1>MEET US</h1>
        <div className={styles.us_images}>
          <Member member = {`${prefix}/blaze.jpg`} member_hobby = {`${prefix}/blaze-hobby.jpg`} name = "Błażej Bolek" role = "Team Leader"></Member>
          <Member member = {`${prefix}/karina.jpg`} member_hobby = {`${prefix}/karina-hobby.jpg`} name = "Karina Leśkiewicz" role = "Outreach Manager"></Member>
          <Member member = {`${prefix}/stanislaw.jpg`} member_hobby = {`${prefix}/stanislaw-hobby.jpg`} name = "Stanisław Kawulok" role = "Software Developer"></Member>
          <Member member = {`${prefix}/emilia.jpg`} member_hobby = {`${prefix}/emilia-hobby.jpg`} name = "Emilia Grygorowicz " role = "Mechanical Leading Engineer"></Member>
          <Member member = {`${prefix}/kajtek.jpg`} member_hobby = {`${prefix}/kajtek-hobby.jpg`} name = "Kajetan Kwiecień" role = "Electrical Engineer"></Member>
          <Member member = {`${prefix}/logo.png`} member_hobby = {`${prefix}/logo.png`} name = "Grzegorz Diaconescu" role = "Data Analyst  / Physics Expert"></Member>
        </div>
      </section>

      <section id = "our-cansat" className={styles.cansat} >

      <h1>OUR CANSAT</h1>
      <div style = {{ backgroundImage: `url(${prefix}/cansatrender.png)` }}>
          
      </div>

    <div className={styles.gradient}></div>

      </section>
      <section id = "contact" className={styles.contact}>
      <h1>CONTACT</h1>
      <div className={styles.contacts_wrap}>
        <a href="mailto:alotech.cansat2023@gmail.com"> alotech.cansat2023@gmail.com</a>
        <a href="https://www.instagram.com/alotech_cansat2023/">our instagram</a>
      </div>

      </section>
    </main>
  )
}

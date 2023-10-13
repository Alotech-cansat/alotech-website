import Image from 'next/image'
import styles from './member.module.css'

interface MemberProps {

    member: string;
    member_hobby: string;
    name: string
  }

export function Member({member, member_hobby, name }: MemberProps){


    return (
        <div className = {styles.member_div} >
            <Image
                src = {member}
                alt = "ktos"
                width = {0}
                height = {0}
                sizes="100vw"
                className={styles.member_image_normal}
            ></Image>

            <Image
                src = {member_hobby}
                alt = "ktos"
                width = {0}
                height = {0}
                sizes="100vw"
                className={styles.member_image_hobby}
            ></Image>
            <div className={styles.Namediv}>
                <h3>{name}</h3>
                <p>role</p>
            </div>

        </div>
    )
}
import GoogleIcon from '@/public/images/google.png'
import styles from './googleButton.module.css'
import Image from 'next/image'

export default function GoogleButton() {
    return(
      <div className={styles.googleButton}>
          <Image src={GoogleIcon} width={15}height={18}></Image>
            <p>Sign Up With Google </p> 
      </div>
  )
}
   
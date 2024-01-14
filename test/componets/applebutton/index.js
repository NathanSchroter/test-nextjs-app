import appleIcon from '@/public/images/apple.png'
import Image from 'next/image'
import styles from './appleButton.module.css'

export default function AppleButton() {
    return(
      <div className={styles.appleButton}>
          <Image  src={appleIcon} width={15}height={18}></Image>
            <p>Sign Up With Apple </p> 
            
      </div>
        
   
      
  
  
  
  )
  }
   
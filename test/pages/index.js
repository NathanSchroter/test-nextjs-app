import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import twitterIcon from '@/public/images/logoX.png'
import Image from 'next/image'
import AppleButton from '@/componets/applebutton'
import GoogleButton from '@/componets/googleButton'
import CreateAccount from '@/componets/createAccountButton'
import SignInButton from '@/componets/signInButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
	<div className={styles.main_container}>
		<main className={styles.main}>
			<Image src={twitterIcon} width={295}height={327}></Image>
			<div className={styles.Container}>
				<h1>Happening Now</h1>
				<h3>Join Today</h3>
				<div>
					<GoogleButton/>
					<br></br>
					<AppleButton/>
					<div className={styles.space}>
					<hr/><p>or</p><hr/>
					</div>
					<CreateAccount/>
					<p>By signing up, you agree to the <a href='https://twitter.com/en/tos' target='_blank'> terms of Service and Privacy</a> Policy, including Cookie Use.</p>
					<h2>Already Have an Account</h2> 
				<SignInButton/>

					
				</div>
			</div>	
				
		</main>
		<br></br>
		<br></br>
		<footer className={styles.footer}>
					<ul>
						<li>About</li>
						<li>Download</li> the X app
						<li>Help</li> Center
						<li>Terms</li> of Service
						<li>Privacy</li> Policy
						<li>Cookie</li> Policy
						<li>Accessibility</li>
						<li>Ads</li> info
						<li>Blog</li>
						<li>Status</li>
						<li>Careers</li>
						<li>Brand</li> Resources
						<li>Advertising</li>
						<li>Marketing</li>
						<li>X</li> for Business
						<li>Developers</li>
						<li>Directory</li>
						<li>Settings</li>
						<li>© 2024 X Corp.</li>
					</ul>
		</footer>
	</div>


)
}
 



  
   

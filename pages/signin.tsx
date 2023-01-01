import Head from 'next/head'
import styles from '../styles/pages/signin.module.scss';
import Link from 'next/link';

export default function Home() {
    return (
        <>

            <Head>
                <title>SignIn - George cosmetics</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=''>
                <div className={styles.container}>
                    <h2>Sign In</h2>
                    <div className={styles.wrapper}>
                        <form>
                            <label>E-mail</label>
                            <input type="email" placeholder='Email' />
                            <label>Password</label>
                            <input type="password" placeholder='Password' />
                        </form>
                        <button type='submit'>Submit</button>
                    </div>
                    <Link href="/register">
                        <p>Don't have an account?</p>
                    </Link>
                </div>
            </main>
        </>
    )
}

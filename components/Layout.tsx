import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Head from 'next/head'
import NProgress from 'nprogress'

interface props {
    children: JSX.Element | JSX.Element[],
    isFooter: boolean
}


export default function Layout({children, isFooter = true}: props) {

    const router = useRouter()
    
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            console.log(url)
            NProgress.start()
        }

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', () => NProgress.done())
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])
    
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Jorge Morales Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                
            </Head>
            <Navbar/>
            <main className="container py-4">
                {children}
            </main>
            
            {isFooter && 
                <div className="footer">
                    <footer className="bg text-center">
                        <div className="container p-4">
                            <h1>&copy; Jorge Morales Portfolio</h1>
                            <p>2000 - {new Date().getFullYear()}</p>
                            <p>All rigth Reserved.</p>
                        </div>
                    </footer>
                </div>
            }
            
            
            
        </>
    )
}

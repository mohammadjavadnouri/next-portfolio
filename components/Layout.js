import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = url => {
    Nprogress.start()
}
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

const Layout = ({children, title}) => (
    <div className="root">
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width" />
            <link 
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            />
            
            
        </Head>
        <header>
            <Link href="/"><a>Go home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/contacts"><a>Contacts</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
        </header> 

        <h1>{title}</h1>
        {children}

        <footer> &copy; Mohammadjavad Nouri {new Date().getFullYear() } </footer>
        
        <style global jsx>{`
            body {
                margin: 0;
                font-size: 110%;
                background: #f0f0f0;
            }
        `}</style>
        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            header {
                width: 100%;
                display: flex;
                justify-content: space-around;
                padding: 1rem;
                font-size: 1.2rem;
                background: indigo;
            }
            header a {
                color: white;
                text-decoration: none;

            }
            header a:hover {
                font-weight:bold;
                color: lightgrey;
            }
            footer {
                padding: 1em;
            }
        `}</style>


    </div>
)

export default Layout;
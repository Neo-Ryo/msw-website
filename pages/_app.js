import SideMenu from '../components/SideMenu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <SideMenu />
            <Component {...pageProps} />
            <footer> I am the footer !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</footer>
        </>
    )
}

export default MyApp

import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <SideMenu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp

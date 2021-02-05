import Head from '../Head/Head'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import styles from '../../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Head title={"Next News"} name={"keywords"} content="web development, programming" />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
)   ;
}
 
export default Layout;
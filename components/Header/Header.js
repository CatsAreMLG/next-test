import Link from 'next/link'

import headerStyles from '../../styles/Header.module.css'

const Header = () => {
    return (
        <>
            <Link href="/">
                <h1 className={headerStyles.title}>
                    <span>Next</span> Blog
                </h1>
            </Link>
        </>
    );
}
 
export default Header;
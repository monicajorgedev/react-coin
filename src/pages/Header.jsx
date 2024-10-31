import {Link, Outlet} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/favorites'}>Favoritas</Link>
        </nav>
        <Outlet />
        </>
    )
}


export default Header
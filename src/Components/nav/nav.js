import './nav.css'

const MainNav  = () => {
    return(
        <div className='main-nav'>
            <ul className='nav-list'>
                <li className='nav-list-items'><a href="#">خانه</a></li>
                <li className='nav-list-items'><a href="#">ابزار</a></li>
                <li className='nav-list-items'><a href="#">فروشات</a></li>
                <li className='nav-list-items'><a href="#">موارد دیگر</a></li>
                <li className='nav-list-items'><a href="#">در باره ما</a></li>
            </ul>
        </div>
    )
}
export default MainNav
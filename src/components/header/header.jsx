import s from './header.module.css'
import { Link } from 'react-router-dom'
import { BiCartAlt } from 'react-icons/bi'
const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.header__title}>
          Game Store
        </Link>
      </div>
      <div className={s.wrapper + '' + s.header__cartblock}>
        <div className={s.cartblock}>
          <BiCartAlt size={25} className={s.cartblock__icon} />
          <span className={s.cartblock__price}>2313 руб.</span>
        </div>
      </div>
    </div>
  )
}
export default Header

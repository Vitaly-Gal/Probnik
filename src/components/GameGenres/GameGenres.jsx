import s from './GameGenres.module.css'

const GameGenres = (props) => {
  return <div className={s.genres}>{props.genres}</div>
}

export default GameGenres

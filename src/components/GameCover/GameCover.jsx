import s from './GameCover.module.css'

const GameCover = (props) => {
  return (
    <div
      className={s.game__cover}
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  )
}
export default GameCover

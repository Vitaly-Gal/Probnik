import GameBuy from '../GameBuy/GameBuy'
import GameCover from '../GameCover/GameCover'

import GameGenres from '../GameGenres/GameGenres'
import s from './GameItem.module.css'

const GameItem = (props) => {
  return (
    <div>
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.item}>
            <div className={s.item__details}></div>
            <div className={s.item__image}>
              <GameCover image={props.game.image} />
            </div>
            <div className={s.item__title}>{props.game.title}</div>
            <div className={s.item__genres}>
              {props.game.genres.map((genres) => (
                <GameGenres genres={genres} key={genres} />
              ))}
            </div>
            <div className={s.item__price}>
              <GameBuy price={props.game.price} key={props.game.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameItem

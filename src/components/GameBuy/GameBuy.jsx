import { Button } from '../Button/Button'
import './GameBuy.css'

const GameBuy = (props) => {
  return (
    <div className="container">
      <div className="price">{props.price} руб.</div>
      <div className="game__buy">
        <Button
          type="primary"
          size="s"
          onClick={() => null}
          children="В корзину"
        />
      </div>
    </div>
  )
}

export default GameBuy

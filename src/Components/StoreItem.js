import React from 'react'
import { Button, Card } from 'react-bootstrap'
import FormatCurrency from "./FormatCurrency"
import { useShoppingCart } from '../context/ShoppingCartContext'
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
        <Card.Img variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
        {quantity === 0 ?( <Button className="w-100" onClick={() => increaseCartQuantity(id)}>Add To Cart</Button>) : (
          <div className="d-flex align-items-center flex-column">
            <div className="d-flex align-items-center justify-content-center">
            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            <span className="fs-3">{quantity} in cart</span> 
            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button onClick={() => removeFromCart(id)}  
            variant="danger"
            size="sm">Remove
            </Button>
          </div>
        )}
        </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem

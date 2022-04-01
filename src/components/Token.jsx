import React from 'react'
import '../style/token.scss'
import images from '../images/ethereum.png'

function Token() {
  return (
    <div className="token">
        <div className="token-buy">
            <img src={images} />
            <h1>Ethereum</h1>
            <button className="token-buy-button">Buy</button>
        </div>
    </div>
  )
}

export default Token
import React from 'react'
import { useParams } from 'react-router-dom'
import stocks from '../../data';


const StockPage = () => {

  let { symbol } = useParams();
  console.log(symbol);

  

  let stockJSX = stocks.map((stock) =>{
    if (symbol === stock.symbol){
       return(
        <div key={stock.symbol}>
          <h1>{stock.name}</h1>
          <h2>({stock.symbol})</h2>
          <h3>`Price: {stock.lastPrice}`</h3>
          <p>Change: {stock.change}</p>
          <p>High: {stock.high}</p>
          <p>Low: {stock.low}</p>
          <p>Open: {stock.open}</p>
        </div>
      )
    }
  })


  return (
    <div>{stockJSX}</div>
  )
}

export default StockPage
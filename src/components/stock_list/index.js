import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import stocks from '../../data'


const StockList = () => {
    const navigate = useNavigate()

    const handleClick = (symbol) =>{
        navigate(`/stocks/${symbol}`)
    }

    const listJSX = stocks.map((item) =>{
        return(
            <div key={item.symbol} onClick={() => handleClick(item.symbol)}>{item.name}</div>
        );
    })

  return (
    <div>{listJSX}</div>
  )
}

export default StockList
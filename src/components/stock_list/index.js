import React from 'react'
import { useNavigate } from 'react-router-dom'
import stocks from '../../data'
import './index.css'


const StockList = () => {
    const navigate = useNavigate()

    const handleClick = (symbol) =>{
        navigate(`/stocks/${symbol}`)
    }

    const listJSX = stocks.map((item) =>{
        return(
            <p key={item.symbol} onClick={() => handleClick(item.symbol)}>{item.name} ({item.symbol})</p>
        );
    });

  return (
    
    <div className='stocklist'>{listJSX}</div>
  )
}

export default StockList
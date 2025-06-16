
import './App.css';
import { useState  } from 'react';

const Card = () => {

  return (
    <div className="Card-Container">
        <div className='Flas-Card'>


        </div>
        
        <button className="next-button" onClick={proceedRight}>Next</button>
        <button className="previous-button" onClick={proceedLeft}>Previous</button>

    </div>
   
  )
}

export default Card





import React from 'react';
import { Link } from 'react-router-dom'
const Iphone = ()=>{
   return(
      <div className='iphone'>
        <Link to='/iphone/regular'>Iphone 11</Link>
        <Link to='/iphone/pro'>iPhone 11 pro</Link>

      </div>
   );
}

export default Iphone;
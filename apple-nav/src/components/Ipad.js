import React from 'react';
import {Link} from 'react-router-dom';
const Ipad = ()=>{
   return(
      <div className='ipad'>
         <Link to='/ipad/pro'>iPad Pro</Link>
         <Link to='/ipad/air'>iPad Air</Link>
      </div>
   );
}

export default Ipad;
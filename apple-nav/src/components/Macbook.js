import React from 'react';
import {Link} from 'react-router-dom';
const Macbook = () =>{
   return(
<div className ='macBook'>
   <Link to='/macbook/pro15'>MacbookPro 15</Link>
   <Link to='/macbook/pro13'>MacBookPro 13</Link>
</div>
   );
}

export default Macbook;
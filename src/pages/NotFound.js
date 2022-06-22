 import React from 'react';
 import fail_img from './../assets/img/recipe_fail.png';

 const NotFound = () => {
   return (
    <div className='main'>
        <div className='not-found'>
          <img src={fail_img} alt='error-img' className='error-img'/>
          <h1>Something went wrong...</h1>
        </div>
    </div>
   )
 }
 
 export default NotFound
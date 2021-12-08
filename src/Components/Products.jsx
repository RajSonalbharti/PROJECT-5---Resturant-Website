import React from 'react';
import Productbox from './Productbox'; 
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';


 function Products() {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus.
                <div className='a-container'>
                    <Productbox image={pimage1} title="Rs.45 Lurger Burger"/>
                    <Productbox image={pimage2} title="Lurger Burger"/>
                    <Productbox image={pimage1} title="Lurger Burger"/>
                </div>
            </p>
            
        </div>
    )
}
export default Products;

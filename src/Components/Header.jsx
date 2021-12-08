import React from 'react';
import {Link} from 'react-scroll';


export default function Header(props) {
  const { search, onInputChange, onSearchClick } = props;

    return (
        
        <div id='main'>
          <div className="jumbotron">
            <h1>FOOD RECIPE</h1>
            <div className="input-group w-50 mx-auto"  >
        <input type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
        <button className="btn btn-dark" onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
      </div>

            <div className='header-heading'>
                <h3>It's Great Time For A Good Taste of Burgers</h3>
                <h1><span>BURGER</span> FOR<br/>WEEK</h1>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <div className='header-btn'>
                {/* <a href='#' className='header-btn'>Order</a>   */}
                <Link to='contact' className='header-btn'>Order</Link> 
                </div>
            </div>
            
        </div>
    )
}

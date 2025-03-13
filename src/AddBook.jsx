import React from 'react';

import {useNavigate} from "react-router-dom";
import './App.css'

const AddBook = () => {

    const navigate_ = useNavigate();
  const handlenavigate_=()=>{
    navigate_('/')
  }

    return (
        <div>
            <form>
                
                <input className='title' type='text' placeholder='Enter the title'/>
                <input className='author' type='text' placeholder='Enter the author'/>
                <input className='description' type='textarea' placeholder='Enter the description'/>
                <input className='image' type='url' placeholder='Enter the image url'/>
                <button  className='but1' onClick={handlenavigate_}>submit</button>
                
            </form>
        </div>
    );
}

export default AddBook;

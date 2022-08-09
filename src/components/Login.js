import React, { useState } from 'react';

import { AiOutlineLogout } from 'react-icons/ai';



import {useEffect} from 'react'


import jwt_decode from "jwt-decode"
import Hero from './Hero'
import Log from './Log';


const Login = () => {
    

    
    var jwt=null
    
  var name=null
if(localStorage.getItem('jwt')){
    var jwt = localStorage.getItem('jwt')
}
else{
    localStorage.setItem('jwt',null)
    var jwt = localStorage.getItem('jwt')
}
const [value, setValue] = useState(jwt)

const clickHandle =()=>{
    localStorage.setItem('jwt',null);
    setValue(null)
    window.location.reload();
}
if(jwt!='null'){
    var name=jwt_decode(jwt).name
  console.log('name: ',name)
}
console.log(value==='null')
  
  if(value==='null'){
    return (
        <div>
            <Log/></div>
      )
  }
  else{
    return(
        <div className='container'><div className='header'><p>Hello {name} </p><AiOutlineLogout onClick={clickHandle}/></div>
        <Hero/>
        </div>
    )
  }
}

export default Login
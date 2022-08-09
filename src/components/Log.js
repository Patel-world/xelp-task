import React from 'react'
import {useEffect} from 'react'


import jwt_decode from "jwt-decode"
const Log = () => {
    const google = window.google
    function handleCallbackResponse(res){
        localStorage.setItem('jwt',res.credential)
        //setValue(res.credential)
        
        window.location.reload();
      }
      useEffect(()=>{
        google.accounts.id.initialize({
            client_id: '21450313655-b4e75lg75hp33umm23923kffj2p73dk3.apps.googleusercontent.com',
          callback: handleCallbackResponse
        });
    
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme: "outline", size:"large"}
        )
      },[]);
  return (
    <div className='container cont'><h1>login to continue</h1>
    <div id="signInDiv"></div></div>
  )
}

export default Log
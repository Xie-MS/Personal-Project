import React from "react";
import {useState, useEffect} from 'react';
import {supabase} from './client'

function OAuth() {
    const [user, setUser]:any = useState(null);
    useEffect(()=>{
        checkUser();
        window.addEventListener('hashchange', function(){
            checkUser();
        })
    },[])
    async function checkUser() {
        const user = supabase.auth.user();
        setUser(user);
        
    }

    async function signInWithFithub() {
       await supabase.auth.signIn({
        provider: 'github'
       });
    }

    async function signOut() {
    await supabase.auth.signOut();
        setUser(null);            
    }

if(user){
   return(
    <>
    <h1>Hello,{user.email}</h1>
      <br />
      <button onClick={signOut}>Sign Out</button>
    </>
   )
}
return(
    <>
    <h1>Hello！</h1>
      <br />
      <p>↓there sing in</p>
      <br />
      <button onClick={signInWithFithub}>Sign In</button>
    </>
   )

}

export default OAuth;

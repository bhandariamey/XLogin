import React, { useState } from 'react'
import styles from "./style.css"

// import Child from './Child';
export default function LoginPage() {
    let [ip,setIp]=useState({user:"",pwd:""})
    let [f,setF]=useState(true)

    let [errorMsg,setErrorMsg]=useState(false);
    let [welcomeFlag,setwelcomeFlag]=useState(false)


    function handleSubmit(e)
    {
    e.preventDefault();
    if(ip.user==="user" && ip.pwd==="password")
    {
    setF(false)
    setwelcomeFlag(true)
    setErrorMsg(false)
    }
    else{
        setErrorMsg("Invalid username or password")
    }

    }
    function handleChange(e){
        setIp((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
        
    }

  return (
    <div>
    {errorMsg &&<h5 style={{color:"red"}}>{errorMsg}</h5>}  
    <h1>Login Page</h1>
    {f&&<form className={styles.container} onSubmit={handleSubmit}>
    
    <div className={styles.inputContainer}>
        <label htmlFor='user'> Username:</label>
        <input type="text" required name="user" id="user" onChange={handleChange} value={ip.fname} placeholder='username'/>

    </div>
    <div className={styles.inputContainer}>
        <label htmlFor='pwd'> Password:</label>
        <input type="password" required name="pwd" id="pwd" onChange={handleChange} value={ip.lname} placeholder='password'/>

    </div>
    <div className={styles.buttonContainer}>
        <button type="submit" >Submit</button>
    </div> 
    </form>}

   {welcomeFlag&& <p style={{margin:"1rem"}}>Welcome, {ip.user}!</p>}        
    </div>
  )
}

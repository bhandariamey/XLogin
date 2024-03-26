import { useState } from 'react';
import styles from './App.module.css'

function App() {

  const userNameCheck = "testuser"
  const passWordCheck = "testpass"

  const [details, setDetails] = useState(false)
  const [incorrect, setIncorrect] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleFormSubmit = (e) => {

    e.preventDefault()
    if(userNameCheck === userName && passWordCheck === password){
      setDetails(true)
    }
    
    else{
      setIncorrect(true)
    }

  }


  return (
    <><h1>Login Page</h1>

    {incorrect && <p>Invalid username or password</p>}

    { !details && <form onSubmit={handleFormSubmit} className={styles.form}>
      
      <label>Username
      <input onChange={(e)=>{setUserName(e.target.value)}} type='text' required placeholder='username' value={userName}/>
      </label>

      <label>Password
      <input onChange={(e)=>{setPassword(e.target.value)}} type='password' required placeholder='password' value={password}/>
      </label>

      <button style={{width:'max-content'}} type="submit">Submit</button>
    </form>}

    

    {details && <p>Welcome, user</p>}




    </>
    );
}

export default App;

import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [details, setDetails] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName === 'user' && password === 'password') {
      setDetails(true);
      setIncorrect(false);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <>
      <h1>Login Page</h1>

      {incorrect && <p>Invalid username or password</p>}

      {!details && (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <label htmlFor='Username'>
            Username
            <input

                onChange={(e) => {
                setUserName(e.target.value);
                setIncorrect(false); // Clear incorrect message when user starts typing
              }}
              id='username'
              type="text"
              name="Username"
              required
              value={userName}
            />
          </label>

          <label htmlFor='Password'>
            Password
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setIncorrect(false); // Clear incorrect message when user starts typing
              }}
              id='Password'
              type="password"
              name="password"
              required
              value={password}
            />
          </label>

          <button style={{ width: 'max-content' }} type="submit" name="login">
            Submit
          </button>
        </form>
      )}

      {details && <p>Welcome, {userName}</p>}
    </>
  );
}

export default App;

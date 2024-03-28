import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [details, setDetails] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setDetails(true);
      setIncorrect(false);
    } else {
      setIncorrect(true);
      setDetails(false); // Reset details state on incorrect login attempt
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
                setUsername(e.target.value);
                setIncorrect(false); // Clear incorrect message when user starts typing
              }}
              id='Username'
              type="text"
              name="Username"
              required
              value={username}
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
              name="Password"
              required
              value={password}
            />
          </label>

          <button style={{ width: 'max-content' }} type="submit" name="login">
            Submit
          </button>
        </form>
      )}

      {details && <p>Welcome, {username}</p>}
    </>
  );
}

export default App;

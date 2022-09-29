import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'http://0.0.0.0:3000/'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setMessage(resp.data.message);
    }).catch(error => {
      setMessage(error.message);
    });
  }, []);

  return (
    <>
    <h2>Message from header:</h2>
    <p>{message}</p>
    </>
  );
}

export default App;

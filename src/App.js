import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({});
  const [refresh, setRefresh] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios('https://www.thefact.space/random');
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
          }}
          id="text"
        >
          {data?.text}
        </div>
        <div
          style={{
            width: '80%',
          }}
        >
          <button
            style={{
              backgroundColor: '#00bcd4',
              color: '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '20px',
              margin: '10px',
              marginTop: '20px',
              width: '20%',
              cursor: 'pointer',
            }}
            onClick={() => setRefresh(!refresh)}
          >
            Refresh
          </button>
          <button
            style={{
              backgroundColor: '#00bcd4',
              color: '#fff',
              border: 'none',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '20px',
              margin: '10px',
              marginTop: '20px',
              width: '20%',
              cursor: 'pointer',
            }}
            onClick={() => {
              // when click on this button, then copy the text to clipboard
              const text = document.getElementById('text');
              navigator.clipboard.writeText(text.innerText);
            }}
          >
            Copy
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;

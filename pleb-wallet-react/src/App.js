import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';

function App() {

  const [price, setPrice] = useState(0);
  const getPrice = () => {
    // Axios is a library that makes it easy to make http requests
    // After we make a request, we can use the .then() method to handle the response asychronously
    // This is an alternative to using async/await
    axios
      .get("https://api.coinbase.com/v2/prices/BTC-USD/spot")
      // .then is a promise that will run when the API call is successful
      .then((res) => {
        console.log(res.data.data.amount);
        setPrice(res.data.data.amount);
       // updateChartData(res.data.data.amount);
      })
      // .catch is a promise that will run if the API call fails
      .catch((err) => {
        console.log(err);
      });
  };
  //Make API request fire every n seconds
  useEffect(() => {
    getPrice();

  }, []);

  return (
    <div className="App">
      <h1>BTC Price</h1>
      <h3>${price}</h3>
    </div>
  );
}

export default App;

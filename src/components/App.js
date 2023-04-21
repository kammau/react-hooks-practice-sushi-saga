import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [plates, setPlates] = useState([]);
  const [wallet, setWallet] = useState(50);


  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((res) => res.json())
    .then((sushiData) => setSushi(sushiData))
  }, [])

  function handleEatenSushi(eatenSushi) {
    setPlates([...plates, 1])
    if (wallet >= eatenSushi.price) {
      setWallet(wallet - eatenSushi.price)
    } else {
      alert("Sorry, you don't have enough money!")
    }
  }


  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatenSushi={handleEatenSushi}/>
      <Table plates={plates} money={wallet}/>
    </div>
  );
}

export default App;

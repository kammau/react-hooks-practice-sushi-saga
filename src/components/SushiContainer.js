import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, onEatenSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiToShow = sushi
    .slice(sushiIndex, sushiIndex + 4)
    .map((s) => {
      return (
        <Sushi key={s.id} sushi={s} onEatenSushi={onEatenSushi}/>
      )
    });
  
  function handleClick() {
    setSushiIndex((sushiIndex) => (sushiIndex + 4));
  }

  return (
    <div className="belt">
      {sushiToShow}
      <MoreButton onClickMore={handleClick}/>
    </div>
  );
}

export default SushiContainer;

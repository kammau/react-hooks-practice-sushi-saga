import React, { useState } from "react";

function Sushi({sushi, onEatenSushi}) {
  const [sushiEat, setSushiEat] = useState("NotEaten")

  const eaten = sushiEat === "Eaten" ? null : <img src={sushi.img_url} alt={sushi.name}></img>

  function hasSushiBeenEaten() {
    setSushiEat("Eaten")
    onEatenSushi(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={hasSushiBeenEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;

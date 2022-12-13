
import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import raspberry from "./raspberry.jpg";

const App = () => {

  const [showMyFruit, setShowMyFruit] = useState(false);

  return (
    <div className="App">
    {showMyFruit  ?   <StripeContainer /> : 
    <div>
      <h3>FRUIT SHOP</h3>
      <h4>$12.99</h4>
      <img src={raspberry} width="500px" alt="fruit" />
      <div>
      <button onClick={() => setShowMyFruit(true)}>Buy some raspberry!</button>
      </div>
    </div>
  }
  </div>
  );
};

export default App;
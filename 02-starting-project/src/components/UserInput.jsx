import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange() {}

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label> Anual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label> Expected Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label> Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}

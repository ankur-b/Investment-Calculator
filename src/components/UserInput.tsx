import { useState } from "react";

export default function UserInput({userInput,handleChange}: {
  userInput: {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  };
  handleChange: (inputIdentifier: string, newValue: number) => void;
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange(
                "initialInvestment",
                event.target.value as unknown as number
              )
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange(
                "annualInvestment",
                event.target.value as unknown as number
              )
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange(
                "expectedReturn",
                event.target.value as unknown as number
              )
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChange("duration", event.target.value as unknown as number)
            }
          />
        </p>
      </div>
    </section>
  );
}

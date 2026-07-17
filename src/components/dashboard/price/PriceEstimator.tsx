// src/components/dashboard/price/PriceEstimator.tsx
"use client";

import * as React from "react";
import "./price-estimator.css";

// Types for form inputs
interface FormValues {
  condition: string;
  edition: string;
  originalPrice: number;
  purchaseYear: number;
}

// Types for AI output
interface AIResult {
  suggestedPrice: number;
  confidence: number; // 0-100
  trend: "Increasing" | "Stable" | "Decreasing";
}

export const PriceEstimator: React.FC = () => {
  const [values, setValues] = React.useState<FormValues>({
    condition: "Good",
    edition: "1st",
    originalPrice: 0,
    purchaseYear: new Date().getFullYear(),
  });

  const [result, setResult] = React.useState<AIResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === "originalPrice" || name === "purchaseYear" ? Number(value) : value,
    }));
  };

  const mockAI = (input: FormValues): AIResult => {
    // Simple mock logic – in a real app this would call an AI service
    const depreciation = 0.2 + (new Date().getFullYear() - input.purchaseYear) * 0.02;
    const suggestedPrice = Math.max(0, Math.round(input.originalPrice * (1 - depreciation)));
    const confidence = Math.floor(80 + Math.random() * 15);
    const trends = ["Increasing", "Stable", "Decreasing"] as const;
    const trend = trends[Math.floor(Math.random() * trends.length)];
    return { suggestedPrice, confidence, trend };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const aiResult = mockAI(values);
    setResult(aiResult);
  };

  const gaugeStyle = {
    // Gauge uses CSS variable for stroke offset based on confidence
    "--confidence": result?.confidence ?? 0,
  } as React.CSSProperties;

  return (
    <section className="price-estimator glass">
      <h1 className="title">AI Price Prediction</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="condition">Condition</label>
          <select name="condition" id="condition" value={values.condition} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Like New">Like New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="edition">Edition</label>
          <input type="text" name="edition" id="edition" value={values.edition} onChange={handleChange} placeholder="e.g., 3rd" />
        </div>
        <div className="field">
          <label htmlFor="originalPrice">Original Price ($)</label>
          <input type="number" name="originalPrice" id="originalPrice" min="0" value={values.originalPrice} onChange={handleChange} />
        </div>
        <div className="field">
          <label htmlFor="purchaseYear">Purchase Year</label>
          <input type="number" name="purchaseYear" id="purchaseYear" min="1900" max={new Date().getFullYear()} value={values.purchaseYear} onChange={handleChange} />
        </div>
        <button type="submit" className="submitBtn">
          Estimate Price
        </button>
      </form>

      {result && (
        <div className="result">
          <h2 className="resultTitle">Estimated Result</h2>
          <p><strong>Suggested Price:</strong> ${result.suggestedPrice}</p>
          <p><strong>Confidence Score:</strong> {result.confidence}%</p>
          <p><strong>Price Trend:</strong> {result.trend}</p>
          <div className="gauge" style={gaugeStyle}>
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#eee"
                strokeWidth="3.8"
              />
              <path
                className="circle"
                strokeDasharray={`${result.confidence}, 100`}
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831"
                fill="none"
                stroke="#00bfff"
                strokeWidth="3.8"
              />
              <text x="18" y="20.35" className="percentage" textAnchor="middle" fontSize="8">
                {result.confidence}%
              </text>
            </svg>
          </div>
        </div>
      )}
    </section>
  );
};

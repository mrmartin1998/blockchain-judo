// src/app/register-judoka/page.js
"use client";
import { useState } from "react";

export default function RegisterJudokaPage() {
  const [formData, setFormData] = useState({
    name: "",
    walletAddress: "",
    dob: "",
    gender: "0",
    weight: "",
    club: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegisterJudoka = () => {
    console.log("Form data:", formData);
    // Here you can call your Web3 function for registration
  };

  return (
    <div className="form-container">
      <h1 className="text-primary">Register a Judoka</h1>
      <form>
        <label>Name:</label>
        <input name="name" className="input-field" value={formData.name} onChange={handleInputChange} />

        <label>Wallet Address:</label>
        <input
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleInputChange}
          className="input-field"
        />

        <label>Date of Birth (YYYYMMDD):</label>
        <input
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className="input-field"
        />

        <label>Gender:</label>
        <select name="gender" className="input-field" value={formData.gender} onChange={handleInputChange}>
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>

        <label>Weight:</label>
        <input
          name="weight"
          type="number"
          value={formData.weight}
          onChange={handleInputChange}
          className="input-field"
        />

        <label>Club:</label>
        <input name="club" className="input-field" value={formData.club} onChange={handleInputChange} />

        <button type="button" className="button-primary" onClick={handleRegisterJudoka}>Register</button>
      </form>
    </div>
  );
}
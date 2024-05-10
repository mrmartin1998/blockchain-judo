"use client";
import { useState } from "react";
import '../globals.css';
import { judoSystem, web3 } from "../utils/web3";

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

  const handleRegisterJudoka = async () => {
    if (!web3 || !judoSystem) {
      alert('Web3 or the contract is not yet initialized.');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];

    try {
      const [year, month, day] = formData.dob.split("-").map(Number);

      if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 || day > 31 || month <= 0 || month > 12 || year <= 0) {
        alert("Please provide a valid date of birth in the format YYYY-MM-DD.");
        return;
      }

      const birthDate = [day, month, year];
      const weight = parseInt(formData.weight, 10);
      const gender = parseInt(formData.gender, 10);

      await judoSystem.methods
        .registerJudoka(
          formData.name,
          formData.walletAddress,
          birthDate,
          gender,
          weight,
          formData.club
        )
        .send({ from: selectedAccount });

      alert("Judoka registered successfully");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="form-container">
      <h1 className="text-primary">Register a Judoka</h1>
      <form>
        <label>Name:</label>
        <input
          name="name"
          className="input-field"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Wallet Address:</label>
        <input
          name="walletAddress"
          className="input-field"
          value={formData.walletAddress}
          onChange={handleInputChange}
        />

        <label>Date of Birth (YYYY-MM-DD):</label>
        <input
          name="dob"
          type="date"
          className="input-field"
          value={formData.dob}
          onChange={handleInputChange}
        />

        <label>Gender:</label>
        <select
          name="gender"
          className="input-field"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="0">Male</option>
          <option value="1">Female</option>
        </select>

        <label>Weight (kg):</label>
        <input
          name="weight"
          type="number"
          className="input-field"
          value={formData.weight}
          onChange={handleInputChange}
        />

        <label>Club:</label>
        <input
          name="club"
          className="input-field"
          value={formData.club}
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="button-primary"
          onClick={handleRegisterJudoka}
        >
          Register
        </button>
      </form>
    </div>
  );
}

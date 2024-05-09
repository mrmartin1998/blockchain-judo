// src/app/register-judoka/page.js
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
    // Assuming wallet address is pre-selected in MetaMask/Ganache account
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = accounts[0];

    try {
      // Date conversion to your Solidity Date struct
      const [year, month, day] = formData.dob.split("-");
      const birthDate = { day, month, year };

      // Call the registerJudoka function from the JudoSystem contract
      await judoSystem.methods
        .registerJudoka(
          formData.name,
          formData.walletAddress,
          birthDate,
          formData.gender,
          formData.weight,
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

        {/* Other form fields */}
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

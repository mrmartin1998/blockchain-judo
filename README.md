# Blockchain Judo DApp

## Introduction

Welcome to **Blockchain Judo**, a decentralized application designed to manage judo practitioners (judokas) on the Ethereum blockchain. This project showcases my skills in full-stack development, blockchain integration, and smart contract development. It provides a comprehensive platform for managing judoka profiles, belt promotions, and club affiliations with enhanced security and transparency through blockchain technology.

## Features

- **Decentralized Judoka Management**: A fully decentralized system for registering and managing judoka profiles.
- **Smart Contracts**: Secure and transparent management of judoka information and belt promotions using Ethereum smart contracts.
- **User Authentication**: Wallet-based authentication for secure and private user identity management.
- **Profile Management**: Detailed profiles with personal information, belt levels, and club affiliations.
- **Belt Promotion**: Functionality to promote judokas to higher belt levels.
- **Responsive Design**: A user-friendly interface built with modern web technologies.

## Technology Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **DaisyUI**: A component library based on Tailwind CSS.

### Backend
- **Next.js API Routes**: Serverless functions for handling backend logic.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **Mailgun**: An email service for sending transactional emails.
- **Stripe**: A payment processing platform for handling transactions.
- **Vercel**: A platform for hosting the Next.js application.

### Blockchain
- **Truffle Framework**: A development environment for Ethereum smart contracts.
- **Ganache**: A personal blockchain for Ethereum development.
- **Sepolia Testnet**: A public Ethereum test network for testing smart contracts.
- **Solidity**: The programming language for writing Ethereum smart contracts.

## Project Structure

### Smart Contracts

The core of the Blockchain Judo DApp is the `JudoSystem` smart contract. It manages the registration, profile management, and belt promotions of judokas. Key functionalities include:
- **Judoka Registration**: Registering judokas with detailed information including name, wallet address, date of birth, gender, weight, and club.
- **Profile Management**: Viewing and managing judoka profiles with personal and club information.
- **Belt Promotion**: Promoting judokas to higher belt levels based on their achievements.

### Frontend Implementation

The frontend is built using React.js and Next.js, with Tailwind CSS and DaisyUI for styling. It interacts with the smart contract to handle user registration, profile management, and belt promotions.

### Key Components

1. **Register Judoka Page**: A form to register new judokas with detailed information.
2. **Judoka Profile Page**: Displays detailed profiles of registered judokas.
3. **Get Belt Level Page**: Allows users to check the belt level of a judoka by their wallet address.
4. **Promote Judoka Page**: Functionality to promote judokas to higher belt levels.

## How to Run the Project

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/mrmartin1998/blockchain-judo.git
    cd blockchain-judo
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start Ganache** (Personal Ethereum Blockchain):
    ```sh
    ganache-cli
    ```

4. **Deploy Smart Contracts**:
    ```sh
    truffle migrate --network development
    ```

5. **Run the Application**:
    ```sh
    npm run dev
    ```

6. **Open in Browser**:
    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Conclusion

This project demonstrates my ability to develop a full-stack decentralized application using modern technologies. It showcases my skills in smart contract development, blockchain integration, and building responsive web applications. Thank you for reviewing my project!

---

*Feel free to reach out to me for any questions or further discussions about this project.*

---

**Contact Information:**

- **Email**: martinemilbrabenec@gmail.com
- **LinkedIn**: [Martin Emil Brabenec](https://www.linkedin.com/in/martin-emil-brabenec-33b818148/)
- **GitHub**: [mrmartin1998](https://github.com/mrmartin1998/)

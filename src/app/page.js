// src/app/page.js
export default function HomePage() {
  return (
    <div className="form-container">
      <h1 className="text-primary">Welcome to the Judo Belt System dApp</h1>
      <p>Explore the world of Judo like never before...</p>
      {/* Add links to other pages */}
      <a href="/register-judoka" className="button-primary">Register a Judoka</a>
    </div>
  );
}

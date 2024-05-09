// src/app/page.js
export default function HomePage() {
  return (
    <div className="form-container">
      <h1 className="text-primary">Welcome to the Judo Belt System dApp</h1>
        <p>Explore the world of Judo like never before! Our decentralized application (dApp) brings efficiency and transparency to managing judo activities. From registering judokas to tracking their progress and achievements, our platform offers a comprehensive solution for practitioners, coaches, and enthusiasts alike.</p>
        <p>Embark on your judo journey with ease and sophistication. Register judokas, promote them as they advance, and participate in a thriving judo community. Ready to dive in?</p>
        


      {/* Add links to other pages */}
      <a href="/register-judoka" className="button-primary">Register a Judoka</a>
    </div>
  );
}

import React from 'react';
import happy from './Imgmental/happy.png';
import happy1 from './Imgmental/happy1.jpg';
import hh from './Imgmental/hh.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Mindful Space</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Main Body */}
      <main className="main">
        <h2>You Are Not Alone</h2>
        <p>
          Mental health is important. Take a deep breath, relax, and let us help you navigate through difficult times.
        </p>
        <button className="chat-button">Start Chat</button>
        
        
        {/* Image Gallery */}
        <div className="image-gallery">
        <img src={hh} alt="calm scene" />
        
          
        <p><b>Prioritize Your Mental Health</b><br/>

            Welcome to Mindful Spaces — Your Companion in Mental Well-being
            Prioritize Your Mental Health
            In today's fast-paced world, taking care of your mental health is more important than ever.
             Whether you're feeling overwhelmed with studies, dealing with anxiety,
              or simply needing a place to unwind and reflect, our platform is designed to offer support,
              resources, and a safe space to address your mental health needs.</p>
              <img src={happy1} alt="calm scene" />
          <p>
          <b>Why Mental Health Matters</b><br/>
              Mental health is the foundation for your overall well-being, 
              influencing how you think, feel, and behave in your everyday life. 
              It affects your ability to cope with stress, build relationships, and achieve personal and academic goals.
              When mental health is neglected, it can lead to anxiety, depression, and a feeling of isolation — but there is always a way to find support.
              At Mindful Spaces, we believe that taking care of your mind is just as important as taking care of your body.
         </p>
         <img src={happy} alt="calm scene" />
          <p>
          <b>What We Offer</b><br/>
              Our website is built to help students like you manage mental health challenges by providing:
            A Safe Space to Share: Connect with others who may be facing similar struggles.<br/>
             Open up about your feelings, or simply read through others’ stories for comfort and solidarity.<br/>
            Professional Guidance: Access tips and articles curated by mental health professionals to help you navigate stress, anxiety, and study pressures.<br/>
            Relaxation Techniques: Learn about mindfulness, meditation, and breathing exercises to help you unwind and reduce stress.<br/>
            Mental Health Resources: Discover resources to help you understand mental health better, from self-care tips to actionable strategies for improving your mental well-being.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Help Center</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;

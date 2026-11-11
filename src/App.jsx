
import { List } from "lucide-react";
import React from "react";

function App() {
  return (
    <div>
      <header>
        <h2>TANMATRA</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#school">Dance School</a>
          <a href="#workshops">Workshops</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <p>THE ART OF INDIAN CLASSICAL DANCE</p>
        <h1>
          Where Tradition
          <br />
          Meets Expression
        </h1>
        <a href="#school" className="btn">
          Explore Our World
        </a>
      </section>
      <section id="gallery" className="gallery-section">
  <div className="gallery-heading">
    <p className="eyebrow">A VISUAL JOURNEY</p>
    <h2>Moments in Motion</h2>
    <p>
      Celebrating the beauty of Indian classical dance,
      artistic expression and the joy of movement.
    </p>
  </div>

  <div className="gallery-grid">
    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance1.jpg`} alt="Bharatanatyam performance" />
      <div className="gallery-caption">Classical Performances</div>
    </div>

    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance2.jpg`} alt="Bharatanatyam dancer" />
      <div className="gallery-caption">Expressions of Tradition</div>
    </div>

    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance3.jpg`} alt="Dance students" />
      <div className="gallery-caption">Learning & Growing</div>
    </div>

    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance4.jpg`} alt="Dance workshop" />
      <div className="gallery-caption">Workshops & Experiences</div>
    </div>

    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance8.jpg`} alt="Classical dance mudra" />
      <div className="gallery-caption">The Language of Mudras</div>
    </div>

    <div className="gallery-item">
      <img src={`${import.meta.env.BASE_URL}images/dance9.jpg`} alt="Dance rehearsal" />
      <div className="gallery-caption">Behind the Scenes</div>
    </div>
  </div>
</section>

      <section id="about">
        <h2>About Divya Anand Kasturi</h2>
        <p>
        Smt. Divya Anand is an accomplished Bharatanatyam artiste with over three decades of training and performance experience, rooted in the Vazhvoor bani. She began her Bharatanatyam journey at the age of eight at The Temple of Fine Arts (TFA), Coimbatore, founded by Swami Shantananda Saraswathi. She received extensive training under the late Smt. Kamakshi Jayaraman and other Gurus of TFA. 
Her artistic journey has taken her to distinguished venues and cultural spaces and Sabhas across India as well as major temple destinations. Her international performances include engagements in Perth and Kuala Lumpur and performing for the Indian Embassy at Stockholm and Srilankan Embassy at Stockholm.
<br></br>
<br></br>
She completed her Arangetram in Coimbatore in 2008 and subsequently continued her journey as an independent performing artiste alongside her IT career. Divya holds a Postgraduate degree in Bharatanatyam from Kalai Kaviri College of Fine Arts, Bharathidasan University, Tiruchirappalli, completed in 2012. She has also trained in Odissi, enriching her understanding of Indian classical dance traditions. 
Divya continues to actively perform Bharatanatyam, presenting both traditional Margams and thematic productions at temples, festivals, Sabhas and independent cultural spaces. Her interests also include modelling, poetry  and creating cinematic, high quality dance videos for digital platforms and other collaborations with diverse artists. She is running her dance academy “Lakinya School of Dance” at bengaluru and training kids.
She is now exploring themes that allow Bharatanatyam to engage with contemporary audiences.
<br></br>
<br></br>
Alongside her artistic career, Divya is a Freelance Software Architect, with 20+ years of experience in technology and leadership roles across leading product companies.
She is also a mother of two daughters. Her journey reflects a sustained commitment to the arts while balancing a demanding technology career and family life.
This multidisciplinary experience brings together artistic discipline, technology, leadership and a lifelong commitment to learning.
<br></br>
<br></br>
She is a published author of a book of poems.


        </p>
      </section>

      <section id="school">
        <h2>Lakinya School of Dance</h2>
        <p>
          A space dedicated to learning, preserving
          and celebrating Bharatanatyam.
        </p>
        <p>
          Classes | Training | Performances | Workshops
        </p>
        <a href="mailto:mail2divya.anand@gmail.com">
          Enquire Now
        </a>
      </section>

      <section id="workshops">
        <h2>Corporate Wellness Workshops</h2>
        <ul>
            <li>
            <strong>Stress Relief Through Movement</strong>
            <p>Explore gentle movement, body awareness, stretching and flowing dance-inspired movements to release physical tension.</p>
            </li>
            <li>
            <strong>Stress Relief Through Gratitude and Grounding</strong>
            <p>Reconnect with the present through grounding exercises, mindful breathing, gratitude and awareness of the body and senses.</p>
            </li>
            <li>
            <strong>Stress Relief Through Abhinaya</strong>
            <p>Explore emotional awareness and expression through Bharatanatyam's Navarasas, facial expressions, eye movements and hasta mudras.</p>
            </li>
            <li>
            <strong>Stress Relief Through Rhythm</strong>
            <p>Discover the joy of rhythm through clapping patterns, sollukattus, tala, rhythmic coordination and group activities.</p>
            </li>
            <li>
            <strong>Putting It All Together – The Story of a Journey</strong>
            <p>Integrate movement, gratitude, abhinaya, music and rhythm into a collective storytelling experience that explores the journey from stress to balance and inner harmony.</p>
            </li>
        </ul>
        <br></br>
        <a href="mailto:mail2divya.anand@gmail.com">
          Enquire Now
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/divya-anand-34a5893b/">Professional Profile</a>
        <br></br>
        <a href="https://www.amazon.in/About-Sweet-Nothings-Divya-Kasturi/dp/9358318015">Poetry</a>
      </section>

      <section id="performances">
        <h2>Performances & Gallery</h2>
        <a href="hhttps://www.youtube.com/@lakinya-tanmatra">
          Watch on YouTube
        </a>
        <br></br>
        <a href="https://www.instagram.com/missdiv_in">
          Instagram
        </a>
      </section>

      <footer id="contact">
        <h2>Connect With Us</h2>
        <p>Phone: +91 9686412209</p>
        <p>Email: mail2divya.anand@gmail.com</p>
        <p>© Tanmatra Technologies</p>
      </footer>
    </div>
  );
}

export default App;

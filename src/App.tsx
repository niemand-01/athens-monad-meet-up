import './App.css'
import FloatingBackground from './FloatingBackground'
import MascotFollower from './MascotFollower'
import TwitterEmbed from './TwitterEmbed'

function App() {
  return (
    <>
      <FloatingBackground />
      <MascotFollower />
      <div className="container">
        <header>
          <h1 className="purple-title">Euronads Meet-up 2025</h1>
        </header>

        <main>
          <section className="meetup-info">
            <h2>Gmonad, Gmouch</h2>
            <p>
              We're thrilled to officially announce that the next Euronads meet-up will be held in Greece on the 4th, 5th and 6th of July.
            </p>
            <p>
              More details will be provided in the upcoming weeks regarding the venue and some other details. If you don't have filled the form yet, DO IT RIGHT NOW or @JohnWRichKid will manifest consequences 🔪🪤
            </p>
            <p>
              Pack your bags and just meet the Nads!
            </p>
            <div className="registration-section">
              <a
                href="https://forms.gle/hKK4U1Y8JoSjQZGH8"
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register Now
              </a>
            </div>
          </section>

          <section className="map-container">
            <h2>Location: Athens, Greece</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50310.82576083435!2d23.7037896!3d37.9838096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1715861234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>

          <section className="twitter-row">
            <div className="twitter-row-left">
              <a
                href="https://x.com/search?q=monad%20athens&src=typed_query"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-search-button"
              >
                See Latest #monad athens Posts on X
              </a>
            </div>
            <div className="twitter-row-right">
              <TwitterEmbed />
            </div>
          </section>
        </main>
      </div>
      {/* Add this to your public/index.html: 
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
      */}
    </>
  )
}

export default App

import './App.css'
import FloatingBackground from './FloatingBackground'
import MascotFollower from './MascotFollower'
import TwitterEmbed from './TwitterEmbed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Restaurant from './Restaurant'
import greekAlphabetImg from './assets/alphabet-Greek-sound-equivalents-English.jpg'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import { Analytics } from '@vercel/analytics/next'

function Home() {
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
              Hi Nads, we're glad to have you all here. I am slowly adding those who submitted their applications to the form and reviewing them (cancelling some bots and making sure to not let enter unknown people).
            </p>
            <p>
              I'm aware y'all are waiting for 3 things:
            </p>
            <p>
              1- The venue<br />
              2- More details on the events<br />
              3- The Luma link to apply for your Visa
            </p>
            <p>
              So, which information can we communicate so far?
            </p>
            <p>
              The main event will be held on July 5th, saturday, on the evening (time TBC, probably around 9pm). We're trying to pick the best venue and options possible to make this event unforgettable for everyone.
            </p>
            <p>
              We are about to lock the venue in the upcoming days and the Luma invite will be shared right after, this will probably greatly facilitate your Visa submissions.
            </p>
            <p>
              What do we recommend:
            </p>
            <p>
              - Book your plane whenever you can<br />
              - Don't forget a swimsuit, july is usually very hot in this region<br />
              - Try to prioritise an hotel/airbnb in the downtown of Athens as this is going to be the epicentre of our gatherings along the week<br />
              - Consider that some of us will arrive between the 2nd and the 3rd of July in order to enjoy the city and other activities before the main event.
            </p>
            <p>
              For the moment, just chill and make your own program, we will keep you updated along the process.
            </p>
            <p>
              Hope to see y'all there! 🙂
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

          <section className="greek-alphabet-section">
            <h2>Greek Alphabet & Sound Equivalents</h2>
            <img
              src={greekAlphabetImg}
              alt="Greek Alphabet Sound Equivalents"
              style={{
                maxWidth: '100%',
                borderRadius: '12px',
                margin: '2rem auto',
                display: 'block',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }}
            />
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
              <a
                href="/restaurant"
                className="twitter-search-button"
                style={{ marginLeft: '10px' }}
              >
                Recommended Restaurants by Nads
              </a>
            </div>
            <div className="twitter-row-right">
              <TwitterEmbed />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

function App() {
  return (
    <Router>
      {/* <SpeedInsights />
      <Analytics /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
  )
}

export default App

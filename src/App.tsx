import './App.css'
import FloatingBackground from './FloatingBackground'
import MascotFollower from './MascotFollower'
import TwitterEmbed from './TwitterEmbed'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Restaurant from './Restaurant'
import AthensFood from './AthensFood'
import TripAdvice from './TripAdvice'
import greekAlphabetImg from './assets/alphabet-Greek-sound-equivalents-English.jpg'
import pageThumbnail from './assets/GsrwXaaXYAAehHC.png'
import ImageScroll from './ImageScroll'
import { Helmet } from 'react-helmet'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import { Analytics } from '@vercel/analytics/next'

// Import all images from the proj directory
const projectImages = import.meta.glob('./assets/proj/*.{png,jpg,jpeg,svg}', { eager: true })
const imageList = Object.values(projectImages).map((image: any) => image.default)

function Home() {
  return (
    <>
      <Helmet>
        <title>Godyessy</title>
        <meta property="og:title" content="Godyessy" />
        <meta property="og:image" content={pageThumbnail} />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href={pageThumbnail} />
      </Helmet>
      <FloatingBackground />
      <MascotFollower />
      <div className="container">
        <header>
          <h1 className="purple-title">The Monad Odyssey 2025</h1>
        </header>
        <section className="latest-thread">
          <h2>Latest thread for official events</h2>
        </section>

        <main>
          <section className="museum-tour-invite meetup-info">
            <p>
              We invite you to join us for a museum tour in Athens on <strong>Friday, July 4th</strong>, and dive into the heart of Greek culture.<br /><br />
              Lucky for us, our guide <strong>@ChaosWalk3r</strong> will be leading the way and sharing insights into the rich history of his country.<br /><br />
              <em>Note: you'll need to book your own ticket. Once you've done so, please request access on Luma.</em>
            </p>
            <div className="registration-section">
              <a
                href="https://lu.ma/2j19ztm4"
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Request Access for Museum Tour on Luma
              </a>
            </div>
          </section>
          <section className="meetup-info">
            <p>
              yeah, so no ETHCC this year… but an incoming purple storm is hitting athens! we have a banger meet-up planned which may or may not include the following:
            </p>
            <div className="event-activities">
              <p><strong>a dip in the mediterranean sea with John w Rich kid</strong></p>
              <p><strong>olive oil appreciation speech with bill monday</strong></p>
              <p><strong>learn how to tiktok and swear in greek from kingloui</strong></p>
              <p><strong>sign up to g-van's hair transplant program</strong></p>
              <p><strong>live retelling of the odysseus by sailornini and Jungy</strong></p>
              <p><strong>birdwatching and live ratings by grimjow</strong></p>
            </div>
            <p>
              no panels, no pressure - just good people, good conversations, and good vibes.
            </p>
            <p className="location-note">
              *location soon
            </p>
            <p className="important-note">
              this event is invite-only. to keep things intimate, no plus-ones, each guest needs their own approved luma invite
            </p>

            <div className="about-monad">
              <h3>about monad</h3>
              <p>
                Monad is a Layer 1 blockchain bringing parallel execution to the EVM, unlocking real-time throughput of 10,000 transactions per second.
              </p>
            </div>

            <div className="photo-release">
              <h3>photo release</h3>
              <p>
                by attending an event organized by Monad Foundation, you are entering an area where photography, audio and video live-streaming and/or recording may occur.
              </p>
              <p>
                your entry and presence at such an event constitutes your consent to be photographed, filmed (including live-streamed), and/or otherwise recorded and to the release, publication, exhibition, or reproduction of any and all recorded media of your appearance, voice, and name for any purpose whatsoever in connection with Monad Foundation and its initiatives.
              </p>
              <p>
                by attending the event, you waive and release any claims you may have related to the use of such media of you at the event.
              </p>
            </div>

            <div className="registration-section">
              <a
                href="https://lu.ma/efrqzoni?tk=LzANZl"
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register on Luma
              </a>
              <a
                href="https://forms.gle/hKK4U1Y8JoSjQZGH8"
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
                style={{ marginLeft: '10px' }}
              >
                Submit Application Form
              </a>
            </div>
          </section>

          <ImageScroll images={imageList} />

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
              <a
                href="http://www.geophysics.geol.uoa.gr/stations/maps/recent.html"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-search-button"
                style={{ marginLeft: '10px' }}
              >
                Earthquake Alerts
              </a>
              <a
                href="/food"
                className="twitter-search-button"
                style={{ marginLeft: '10px' }}
              >
                Traditional Greek Food Guide
              </a>
              <a
                href="/trip-advice"
                className="twitter-search-button"
                style={{ marginLeft: '10px' }}
              >
                Trip Advice & Attractions
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
    <>
      <Helmet>
        <title>Godyessy</title>
        <meta property="og:title" content="Godyessy" />
        <meta property="og:image" content="/GsrwXaaXYAAehHC.png" />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/png" href="/GsrwXaaXYAAehHC.png" />
      </Helmet>
      <Router>
        {/* <SpeedInsights />
        <Analytics /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/food" element={<AthensFood />} />
          <Route path="/trip-advice" element={<TripAdvice />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

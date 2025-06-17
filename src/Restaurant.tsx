// import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import recommendationImg from './assets/karamanlidika-recommendation.png';
import maiandrosImg from './assets/maiandros.png';
// import { SpeedInsights } from "@vercel/speed-insights/react";
// import { Analytics } from "@vercel/analytics/react";

function Restaurant() {
    return (
        <div className="container">
            <Helmet>
                <title>Restaurants - Godyessy</title>
            </Helmet>
            <header>
                <h1 className="purple-title">Best restaurants in Town</h1>
                <Link to="/" className="back-link">← Back to Home</Link>
            </header>

            <main>
                <section className="restaurant-info">
                    <h2>Karamanlidika</h2>
                    <p>
                        Karamanlidika is a renowned traditional Turkish deli and restaurant located in the heart of Athens.
                        Known for its authentic flavors and warm atmosphere, it's a perfect spot for our meetup.
                    </p>

                    <img
                        src={recommendationImg}
                        alt="Recommendation for Karamanlidika"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />
                    <div className="map-wrapper" style={{ marginTop: '2rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.3258450184717!2d23.7230674!3d37.9802486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd2491533def%3A0x53427c892f9c3c25!2sKaramanlidika!5e0!3m2!1sen!2sus!4v1715861234567!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        <h3>Location Details</h3>
                        <p>
                            <strong>Address:</strong> Evripidou 52, Athina 105 52, Greece<br />
                            <strong>Price:</strong> €10–20 per person<br />
                            <strong>Phone:</strong> +30 21 0325 4184
                        </p>
                    </div>

                    {/* --- Maiandros Restaurant --- */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Maiandros</h2>
                    <p>
                        Maiandros is a popular Greek restaurant in Athens, known for its traditional cuisine and friendly atmosphere. It's a great spot to experience authentic local flavors.
                    </p>
                    <img
                        src={maiandrosImg}
                        alt="Recommendation for Maiandros"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />
                    <div className="map-wrapper" style={{ marginTop: '2rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.627964964019!2d23.7227795!3d37.9756786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd22f26595b7%3A0xee3220d37974d3ca!2sMaiandros%20Restaurant!5e0!3m2!1sen!2sus!4v1715861234567!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        <h3>Location Details</h3>
                        <p>
                            <strong>Address:</strong> Adrianou 47, Athina 105 55, Greece<br />
                            <strong>Price:</strong> €10–20 per person<br />
                            <strong>Phone:</strong> +30 21 0321 0181
                        </p>
                    </div>

                    {/* --- Kyklamino Restaurant --- */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Kyklamino</h2>
                    <p>
                        Kyklamino is a cozy spot in Athens, offering delicious Greek cuisine and a welcoming atmosphere. Perfect for a relaxed meal with friends.
                    </p>
                    <img
                        src={maiandrosImg}
                        alt="Recommendation for Kyklamino"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />
                    <div className="map-wrapper" style={{ marginTop: '2rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.540964964019!2d23.7215317!3d37.9766288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bdec6364b5a3%3A0x9e80d36e7c88b5!2sThe%20Kyklamino!5e0!3m2!1sen!2sus!4v1715861234567!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        <h3>Location Details</h3>
                        <p>
                            <strong>Address:</strong> Pl. Avissinias 3, Athina 105 55, Greece<br />
                            <strong>Price:</strong> €10–15 per person<br />
                            <strong>Phone:</strong> +30 21 1115 9787
                        </p>
                    </div>

                </section>
                {/* <Analytics />
                <SpeedInsights /> */}
            </main>
        </div>
    );
}

export default Restaurant; 
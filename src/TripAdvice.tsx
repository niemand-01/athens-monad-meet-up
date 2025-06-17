import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function TripAdvice() {
    return (
        <div className="container">
            <Helmet>
                <title>Trip Advice - Godyessy</title>
            </Helmet>
            <div className="back-link-container">
                <Link to="/" className="back-link">
                    ← Back to Main Page
                </Link>
            </div>
            <header>
                <h1 className="purple-title">Athens Trip Advice</h1>
            </header>

            <main>
                <section className="tickets-section">
                    <h2>Acropolis Tickets & Tours</h2>
                    <div className="tickets-grid">
                        <div className="ticket-card">
                            <h3>Skip-the-Line Tickets</h3>
                            <div className="ticket-item">
                                <strong>Acropolis Skip-the-Line Ticket with Audio Guide</strong>
                                <p>Make the most of your time with skip-the-line entrance to the Acropolis. Includes audio guides for both Acropolis and Athens City.</p>
                                <a href="https://www.getyourguide.com/athens-l91/athens-acropolis-top-attractions-tickets-with-audio-guide-t415222/?partner_id=8ZL2433&cmp=m000001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ticket-button">
                                    Book Now - €37
                                </a>
                            </div>
                            <div className="ticket-item">
                                <strong>Acropolis & Parthenon Tickets with Audio Guide</strong>
                                <p>Explore the ancient wonder without the wait. Audio guide available in multiple languages.</p>
                                <a href="https://www.headout.com/athens-acropolis-tickets/entry-tickets-to-athens-acropo-and-parthenon-with-audio-guide-e-12045/?affiliate_code=lsxe5i&utm_campaign=m000001&utm_medium=affiliate&utm_source=tourscanner"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ticket-button">
                                    Book Now - €36
                                </a>
                            </div>
                        </div>
                        <div className="ticket-card">
                            <h3>Guided Tours</h3>
                            <div className="ticket-item">
                                <strong>Acropolis Ticket and Guided Tour</strong>
                                <p>90-minute tour with a licensed expert guide. Uncover the secrets of the Acropolis, Dionysus Theater, and Sanctuary.</p>
                                <a href="https://www.viator.com/tours/Athens/Afternoon-Acropolis-tour/d496-5776P15?mcid=42383&target_lander=NONE&campaign=m000001&pid=P00051294&medium=link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ticket-button">
                                    Book Now - €67
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ticket-note">
                        <p><em>Note: Tickets are available for purchase online in advance. Summer prices (April-October) are €20 for adults, with reduced rates of €10 from November to March.</em></p>
                        <p><em>For official tickets and more information, visit the <a href="https://www.acropolis-athens-tickets.com/" target="_blank" rel="noopener noreferrer" className="official-link">official Acropolis tickets website</a>.</em></p>
                    </div>
                </section>

                <section className="museums-section">
                    <h2>Must-Visit Museums</h2>
                    <div className="museums-grid">
                        <div className="museum-card">
                            <h3>Top Picks</h3>
                            <div className="museum-item">
                                <strong>Acropolis Museum</strong>
                                <p>The crown jewel of Athens, showcasing artifacts from the Acropolis archaeological site.</p>
                            </div>
                            <div className="museum-item">
                                <strong>National Gallery</strong>
                                <p>Home to works by Greek artists like El Greco, plus masterpieces from Caravaggio and Dali.</p>
                            </div>
                            <div className="museum-item">
                                <strong>Goulandri Museum</strong>
                                <p>Located on Eratosthenous street, featuring an impressive collection of modern and contemporary art.</p>
                            </div>
                        </div>

                        <div className="museum-card">
                            <h3>Also Worth Visiting</h3>
                            <div className="museum-item">
                                <strong>Ancient Agora</strong>
                                <p>The heart of ancient Athens, where democracy was born.</p>
                            </div>
                            <div className="museum-item">
                                <strong>National Archaeological Museum</strong>
                                <p>Greece's largest archaeological museum with an extensive collection of ancient artifacts.</p>
                            </div>
                            <div className="museum-item">
                                <strong>Benaki Museum</strong>
                                <p>A comprehensive collection of Greek art and artifacts from prehistoric to modern times.</p>
                            </div>
                        </div>
                    </div>
                    <div className="museum-note">
                        <p><em>Note: EMST (National Museum of Contemporary Art) is also popular, though it's more focused on modern art.</em></p>
                    </div>
                </section>

                <section className="entertainment-section">
                    <h2>Entertainment & Nightlife</h2>
                    <div className="entertainment-grid">
                        <div className="entertainment-card">
                            <h3>Bars & Cafes</h3>
                            <div className="entertainment-item">
                                <strong>Monastiraki Area</strong>
                                <p>Bustling with bars on every corner, perfect for nightlife.</p>
                            </div>
                            <div className="entertainment-item">
                                <strong>Barretts</strong>
                                <p>A local favorite for drinks and atmosphere.</p>
                            </div>
                            <div className="entertainment-item">
                                <strong>s.i.x dogs</strong>
                                <p>A popular coffee spot (currently closed).</p>
                            </div>
                        </div>

                        <div className="entertainment-card">
                            <h3>Cinema</h3>
                            <div className="cinema-info">
                                <strong>Cine Paris</strong>
                                <p>An enchanting open-air cinema located under the Acropolis, offering a unique movie-watching experience with a magical atmosphere.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default TripAdvice; 
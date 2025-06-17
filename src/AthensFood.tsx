import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import bougatsaImg from './assets/food/bougatsa.jpg';
import spanakopitaImg from './assets/food/spanakopita.jpg';
import tiropitaImg from './assets/food/tiropita.jpg';
import fredoImg from './assets/food/fredo.jpg';
import ouzoImg from './assets/food/ouzo.jpg';
import moussakaImg from './assets/food/moussaka.jpg';
import grilledSquidImg from './assets/food/grilled squid with feta cheese.jpg';
import grilledOctopusImg from './assets/food/grilled octopus.jpg';
import gyrosImg from './assets/food/gyros.jpg';
import alexFoodRecommendImg from './assets/food/alex_food_recommend.png';

function AthensFood() {
    return (
        <div className="container">
            <Helmet>
                <title>Greek Food Guide - Godyessy</title>
            </Helmet>
            <header>
                <h1 className="purple-title">Traditional Greek Food Guide</h1>
                <Link to="/" className="back-link">← Back to Home</Link>
            </header>

            <main>
                <section className="food-info">
                    {/* Alex's Food Recommendation */}
                    <h2>Alex's Food Recommendations</h2>
                    <p>
                        Check out these amazing food recommendations from Alex, a local food expert who knows all the best spots in Athens!
                    </p>
                    <img
                        src={alexFoodRecommendImg}
                        alt="Alex's Food Recommendations"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    <hr style={{ margin: '3rem 0' }} />

                    {/* Bougatsa */}
                    <h2>Bougatsa</h2>
                    <p>
                        A traditional Greek pastry made with layers of phyllo dough filled with semolina custard.
                        It's typically served warm and dusted with powdered sugar and cinnamon.
                    </p>
                    <img
                        src={bougatsaImg}
                        alt="Bougatsa"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Spanakopita */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Spanakopita</h2>
                    <p>
                        A savory Greek pie made with layers of crispy phyllo dough filled with spinach and feta cheese.
                        It's a popular appetizer or snack throughout Greece.
                    </p>
                    <img
                        src={spanakopitaImg}
                        alt="Spanakopita"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Tiropita */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Tiropita</h2>
                    <p>
                        A traditional Greek cheese pie made with layers of phyllo dough and filled with a mixture of
                        feta cheese and eggs. It's a beloved breakfast or snack item.
                    </p>
                    <img
                        src={tiropitaImg}
                        alt="Tiropita"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Fredo */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Fredo</h2>
                    <p>
                        A refreshing Greek coffee drink made with espresso, ice, and frothed milk.
                        It's perfect for hot summer days in Athens.
                    </p>
                    <img
                        src={fredoImg}
                        alt="Fredo"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Ouzo */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Ouzo</h2>
                    <p>
                        Greece's national spirit, an anise-flavored aperitif that turns milky white when mixed with water.
                        It's typically served with meze (small dishes) and enjoyed during long summer evenings.
                    </p>
                    <img
                        src={ouzoImg}
                        alt="Ouzo"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Moussaka */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Moussaka</h2>
                    <p>
                        A classic Greek dish made with layers of eggplant, spiced ground meat, and a creamy béchamel sauce.
                        It's one of Greece's most famous traditional dishes.
                    </p>
                    <img
                        src={moussakaImg}
                        alt="Moussaka"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Grilled Squid */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Grilled Squid with Feta Cheese</h2>
                    <p>
                        Fresh squid grilled to perfection and served with crumbled feta cheese.
                        A popular seafood dish in Greek tavernas.
                    </p>
                    <img
                        src={grilledSquidImg}
                        alt="Grilled Squid with Feta Cheese"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Grilled Octopus */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Grilled Octopus</h2>
                    <p>
                        Tender octopus grilled with olive oil and herbs, served with lemon.
                        A must-try seafood delicacy in Greek cuisine.
                    </p>
                    <img
                        src={grilledOctopusImg}
                        alt="Grilled Octopus"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />

                    {/* Gyros */}
                    <hr style={{ margin: '3rem 0' }} />
                    <h2>Gyros</h2>
                    <p>
                        A popular Greek street food made with meat (usually pork or chicken) cooked on a vertical rotisserie,
                        served in pita bread with tomatoes, onions, and tzatziki sauce.
                    </p>
                    <img
                        src={gyrosImg}
                        alt="Gyros"
                        style={{
                            maxWidth: '100%',
                            borderRadius: '12px',
                            margin: '1.5rem auto',
                            display: 'block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
                        }}
                    />
                </section>
            </main>
        </div>
    );
}

export default AthensFood; 
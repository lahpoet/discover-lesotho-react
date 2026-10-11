
import React from "react";
import "./App.css";
import AttractionList from "./components/AttractionList";
import EnquiryForm from "./components/EnquiryForm";
import attractions from "./data/attractions";

function App() {
  // Select three destinations to feature on the home page
  const featuredAttractions = attractions.filter(
    (attraction) => attraction.id <= 3
  );

  return (
    <div className="App">
      {/* Website navigation */}
      <header className="navbar">
        <h2 className="logo">Discover Lesotho</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#featured">Featured</a>
          <a href="#attractions">Attractions</a>
          <a href="#enquiry">Contact</a>
        </nav>
      </header>

      <main>
        {/* Welcome section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="small-heading">
              WELCOME TO THE MOUNTAIN KINGDOM
            </p>

            <h1>Discover the Beauty of Lesotho</h1>

            <p>
              Explore beautiful mountains, amazing waterfalls and
              the rich culture of the Basotho people.
            </p>

            <a className="main-button" href="#attractions">
              Explore Destinations
            </a>
          </div>
        </section>

        {/* Introduction to Lesotho */}
        <section className="about" id="about">
          <h2>Discover Lesotho</h2>

          <p>
            Lesotho is a mountain kingdom surrounded by South Africa.
            It is known for its beautiful highlands, traditional
            Basotho culture, pony trekking and spectacular scenery.
            Whether you enjoy nature, history or adventure, there is
            something to discover in Lesotho.
          </p>

          <div className="about-facts">
            <div>
              <h3>Mountain Kingdom</h3>
              <p>Explore the beautiful highlands.</p>
            </div>

            <div>
              <h3>Basotho Culture</h3>
              <p>Discover traditions and local heritage.</p>
            </div>

            <div>
              <h3>Outdoor Adventure</h3>
              <p>Enjoy hiking, pony trekking and sightseeing.</p>
            </div>
          </div>
        </section>

        {/* Featured destinations */}
        <section className="featured-section" id="featured">
          <h2>Featured Destinations</h2>

          <p className="section-intro">
            Start your journey with some of Lesotho's interesting places.
          </p>

          <div className="featured-grid">
            {featuredAttractions.map((attraction) => (
              <div className="featured-card" key={attraction.id}>
                <img
                  src={attraction.image}
                  alt={attraction.name}
                />

                <div className="featured-info">
                  <p className="featured-category">
                    {attraction.category}
                  </p>

                  <h3>{attraction.name}</h3>

                  <p>{attraction.description}</p>

                  <a href="#attractions" className="text-link">
                    Explore this destination →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular activities */}
        <section className="activities-section">
          <h2>Popular Things to Do</h2>

          <p className="section-intro">
            Make your visit special by trying some local activities.
          </p>

          <div className="activities-grid">
            <div className="activity-card">
          
              <h3>Mountain Hiking</h3>
              <p>
                Enjoy mountain trails and amazing views of the highlands.
              </p>
            </div>

            <div className="activity-card">
              
              <h3>Pony Trekking</h3>
              <p>
                Experience mountain travel on horseback with local guides.
              </p>
            </div>

            <div className="activity-card">
              
              <h3>Cultural Experiences</h3>
              <p>
                Learn about Basotho history, traditions and heritage.
              </p>
            </div>

            <div className="activity-card">
              
              <h3>Nature Photography</h3>
              <p>
                Capture waterfalls, landscapes and beautiful scenery.
              </p>
            </div>
          </div>
        </section>

        {/* All destinations */}
        <section className="attractions" id="attractions">
          <h2>Explore Our Attractions</h2>

          <p>
            Search our destinations or choose a category to find
            somewhere to visit.
          </p>

          <AttractionList />
        </section>

        {/* Visitor enquiries */}
        <section className="enquiry" id="enquiry">
          <EnquiryForm />
        </section>
      </main>

      {/* Website footer */}
      <footer>
        <p>Discover Lesotho | Explore, Experience and Enjoy</p>
        <p>Discover the culture, nature and beauty of Lesotho.</p>
      </footer>
    </div>
  );
}

export default App;

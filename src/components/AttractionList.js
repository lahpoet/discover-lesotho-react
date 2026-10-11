
import React, { useState } from "react";
import attractions from "../data/attractions";

function AttractionList() {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  // Search and filter attractions
  const filteredAttractions = attractions.filter((attraction) => {
    const matchesName = attraction.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      attraction.category === selectedCategory;

    return matchesName && matchesCategory;
  });

  // Show or hide the details of an attraction
  function handleDetails(attractionId) {
    if (selectedAttraction === attractionId) {
      setSelectedAttraction(null);
    } else {
      setSelectedAttraction(attractionId);
    }
  }

  return (
    <div>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search for a destination..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          aria-label="Search attractions by name"
        />

        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          aria-label="Filter attractions by category"
        >
          <option value="All">All Categories</option>
          <option value="Nature">Nature</option>
          <option value="Adventure">Adventure</option>
          <option value="Culture and History">
            Culture and History
          </option>
        </select>
      </div>

      <p className="results-count">
        Showing {filteredAttractions.length} destination(s)
      </p>

      {filteredAttractions.length > 0 ? (
        <div className="attraction-grid">
          {filteredAttractions.map((attraction) => (
            <div className="attraction-card" key={attraction.id}>
              <img
                src={attraction.image}
                alt={attraction.name}
              />

              <div className="attraction-info">
                <h3>{attraction.name}</h3>

                <p>
                  <strong>Location:</strong> {attraction.location}
                </p>

                <p>
                  <strong>Category:</strong> {attraction.category}
                </p>

                <p>{attraction.description}</p>

                <p>
                  <strong>Activities:</strong>{" "}
                  {attraction.activities.join(", ")}
                </p>

                <p>
                  <strong>Visiting cost:</strong> {attraction.cost}
                </p>

                <button
                  className="details-button"
                  onClick={() => handleDetails(attraction.id)}
                  aria-expanded={selectedAttraction === attraction.id}
                >
                  {selectedAttraction === attraction.id
                    ? "Hide Details"
                    : "View Details"}
                </button>

                {selectedAttraction === attraction.id && (
                  <div className="extra-details">
                    <h4>About this destination</h4>

                    <p>{attraction.description}</p>

                    <p>
                      <strong>Activities to enjoy:</strong>
                    </p>

                    <ul>
                      {attraction.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>

                    <p>
                      <strong>Estimated visiting cost:</strong>{" "}
                      {attraction.cost}
                    </p>

                    <p>
                      Ask local tourism offices or guides about
                      opening times, transport and available tours
                      before your visit.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">
          No destinations found. Try another search.
        </p>
      )}
    </div>
  );
}

export default AttractionList;

"use client";
import { Lateef } from "next/font/google";
import React, { useState } from "react";
import Image from "next/image";
import img from "./image1.jpeg";
import build from "./build.jpeg";
import image from "./image2.jpeg";
import newimage from "./image3.jpeg";
import images from "./image4.jpeg";
import builds from "./image5.jpeg";
import resort from "./resort.jpeg";
import { FaCalendar, FaSearch } from "react-icons/fa";
// import "../app/styles/style.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = () => {
    // You can implement the search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <div className="header">
      <div className="header-page">
        <input
          type="text"
          placeholder="Search anything"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "250px",
            margin: "2rem",
            height: "40px",
            borderRadius: "10px",
            paddingLeft: "13px",
          }}
        />

        <p className="date">Saturday, May 3rd 2023</p>
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      <div className="image-one">
        <Image src={img} alt="" />

        <div className="destination">
          <span className="search-icon">
            <FaSearch />
            <input
              className="search"
              type="text"
              placeholder="Where are you going to?"
            />
            |
          </span>
          <span className="search-icon">
            <FaCalendar />
            {/* <input className="search" type="text" placeholder="check-in Date" />
             */}
            <input
              className="searchdate"
              type="date"
              id="dueDate"
              name="dueDate"
              placeholder="check-in date"
              value="dueDate"
            />
          </span>
          |
          <span className="search-icon">
            {/* <input className="search" type="text" placeholder="3 adults" /> */}
            <select className="select">
              <option value="1">1 adult</option>
              <option value="2">2 adults</option>
              <option value="3">3 adults</option>
              <option value="4">4 adults</option>
              <option value="5">5 adults</option>
            </select>
          </span>
          <button className="search-button">Search</button>
        </div>
      </div>

      <div>
        <p className="trend-destination">Trending destinations</p>
      </div>

      <div className="container ">
        <div className="container-one">
          <Image className="image-build" src={build} alt="" />
          <div className="city-one">
            <h2>Montmartre, France</h2>
            <p>Visiting the best tourist areas chosen by the audience</p>
            <p> $450,000,00</p>
          </div>
        </div>
        <div className="container-two">
          <Image className="image-build" src={build} alt="" />
          <div className="city-two">
            <h2>Instabul, Turkey</h2>
            <p>
              One of our best selling tours to Turkey and visiting its
              regions...
            </p>
            <p> $600,000,00</p>
          </div>
        </div>

        <div className="container-three">
          <Image className="image-build" src={build} alt="" />
          <div className="city-two">
            <h2>London, UK</h2>
            <p>VLondo is one of the most beautiful places to visit..</p>
            <p> $450,000,00</p>
          </div>
        </div>
      </div>

      <div>
        <p className="best-offer">Best Offers</p>
      </div>
      <div className="main-section">
        <div className="section-one">
          <Image className="new-image" src={image} alt="" />
          <div className="city">
            <h2>7 Seasons Apartment</h2>
            <p>Kesignton/ London</p>
            <p> $65,00 / night</p>
          </div>
        </div>
        <div className="section-one">
          <Image className="new-image" src={newimage} alt="" />
          <div className="city">
            <h2>Along with the villa</h2>
            <p>Hungary/ Budapest</p>
            <p> $65,00 / night</p>
          </div>
        </div>
        <div className="section-one">
          <Image className="new-image" src={resort} alt="" />
          <div className="city">
            <h2>Resort and Recreation</h2>
            <p>Williamstreet/ Boxon</p>
            <p> $65,00 / night</p>
          </div>
        </div>
        <div className="section-one">
          <Image className="new-image" src={images} alt="" />
          <div className="city">
            <h2>Beautiful and classy</h2>
            <p>Citadines Opera Paris/ France</p>
            <p> $65,00 / night</p>
          </div>
        </div>

        <div className="section-one">
          <Image className="new-image" src={builds} alt="" />
          <div className="city">
            <h2>Permanent Peace</h2>
            <p>Sugar Apartment/ Brazil</p>
            <p> $65,00 / night</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

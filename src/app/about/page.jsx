import React from "react";

const AboutPage = () => {
  return (
    <div style={{ lineHeight: "1.6", color: "#333" }}>
      {/* Banner Section */}
      <section
        style={{
          textAlign: "center",
          padding: "50px 20px",
          backgroundColor: "#1a1a1a",
          color: "#fff",
        }}
      >
        <h1>Born to Ride, Built for Adventure</h1>
        <p>Bangladesh-er bikers-der jonno ekta bishas-er thikana.</p>
      </section>

      {/* Features Table/Grid */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "40px" }}>
        <div style={{ textAlign: "center", width: "30%" }}>
          <h3>Quality Bikes</h3>
          <p>Imported ebong local best brands-er collection.</p>
        </div>
        <div style={{ textAlign: "center", width: "30%" }}>
          <h3>Expert Reviews</h3>
          <p>Kinar agey jene nin konta apnar jonno best.</p>
        </div>
        <div style={{ textAlign: "center", width: "30%" }}>
          <h3>After Sales</h3>
          <p>24/7 technical support ebong service advice.</p>
        </div>
      </div>

      {/* Statistics Section */}
      <section style={{ backgroundColor: "#f4f4f4", padding: "30px", textAlign: "center" }}>
        <h2>Our Milestones</h2>
        <p>
          <strong>5000+</strong> Happy Riders | <strong>20+</strong> Cities | <strong>50+</strong>{" "}
          Top Brands
        </p>
      </section>
    </div>
  );
};

export default AboutPage;

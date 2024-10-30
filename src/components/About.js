import React from "react";

function About({about, image}) {
  return (
    <div className="About">
      <aside>
        <p>{about}</p>
        <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      </aside>
    </div>
  );
}

export default About;
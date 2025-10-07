
import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer">
                <div className="shimmer-image"></div>
                <div className="shimmer-name"></div>
                <div className="shimmer-cousine"></div>
                <div className="shimmer-rating"></div>
                <div className="shimmer-delivery"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

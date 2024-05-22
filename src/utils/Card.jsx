"use client"
import React, { useState } from "react";
import PlacementChart from "./PlacementChart";

const Card = ({ year }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setShowPopover(true);
  };

  return (
    <>

      <div className="card">
        <div className="front" style={{ backgroundImage: "url(img/cardbg.jpg)" }}>
          <p>{year}</p>
        </div>
        <div className="back" style={{ backgroundImage: "url(img/cardbg.jpg)" }}>
          <div className="button btn" onClick={() => handleDepartmentClick("cse")}>
            CSE
          </div>
          <div className="button btn" onClick={() => handleDepartmentClick("ece")}>
            ECE
          </div>
          <div className="button btn" onClick={() => handleDepartmentClick("me")}>
            ME
          </div>
          <div className="button btn" onClick={() => handleDepartmentClick("bt")}>
            BIO-TECH
          </div>
        </div>
      </div>
      {showPopover && (
        <PlacementChart
          department={selectedDepartment}
          year={year}
          onClose={() => setShowPopover(false)}
        />
      )}
    </>
  );
};

export default Card;

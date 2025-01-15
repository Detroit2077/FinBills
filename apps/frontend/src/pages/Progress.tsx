import React, { useEffect, useState } from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const [scrollProgress, setScrollProgress] = useState();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = Math.min(scrollTop / scrollHeight, 1);

    // Update progress only if it changes significantly (small threshold)
    if (Math.abs(progress - scrollProgress) > 0.01) {
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress]);

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      <h1 className="text-center text-4xl font-bold mb-8">
        How it <span className="text-blue-600">works</span>
      </h1>
      <p className="text-center text-lg text-gray-500 mb-8">
        Easily capture all stocks in inventory
      </p>

      <div className="timeline-container">
        <div
          className="timeline-line"
          style={{ height: `${scrollProgress * 100}%` }}
        ></div>

        <div className="timeline-step">
          <div className="step-circle">1</div>
          <div className="step-content">
            <h3 className="step-title">Sign Up to Finbills super quick</h3>
            <p>User registers for the platform and sets up their account.</p>
          </div>
        </div>

        <div className="timeline-step">
          <div className="step-circle">2</div>
          <div className="step-content">
            <h3 className="step-title">Set Up Inventory</h3>
            <p>Set up the inventory and update stocks using the inventory dashboard.</p>
          </div>
        </div>

        <div className="timeline-step">
          <div className="step-circle">3</div>
          <div className="step-content">
            <h3 className="step-title">Track Shipments on ease</h3>
            <p>Input shipping information to monitor orders in real-time and track them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

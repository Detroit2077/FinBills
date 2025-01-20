import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";

interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  { id: 1, title: "Step 1", description: "This is the first step." },
  { id: 2, title: "Step 2", description: "This is the second step." },
  { id: 3, title: "Step 3", description: "This is the third step." },
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const h = height/2;

        // Trigger animation when timeline is near the viewport
        if (top <= windowHeight && top + height >= 0) {
          const visibleHeight = Math.max(0, Math.min(windowHeight - top, height));
          setProgress((visibleHeight / h) * 100); // Calculate progress percentage
        } else {
          setProgress(0); // Reset progress when out of view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-line">
        <div
          className="timeline-progress"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
      <div className="timeline-steps">
        {steps.map((step, index) => {
          const dotPosition = (index / (steps.length - 1)) * 100; // Position dots evenly
          const isFilled = progress >= dotPosition; // Check if dot is reached
          const fillPercentage = Math.min(
            100,
            Math.max(0, ((progress - dotPosition) / (100 / steps.length)) * 100)
          ); // Gradual filling percentage

          return (
            <div
              key={step.id}
              className="timeline-step"
              style={{ top: `${dotPosition}%` }}
            >
              <div
                className="step-circle"
                style={{
                  background: `conic-gradient(#604aff ${fillPercentage}%, white 0%)`,
                  borderColor: "#604aff",
                }}
              ></div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;

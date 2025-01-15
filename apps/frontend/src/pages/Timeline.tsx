import React, { useRef, useEffect, useState } from "react";
import "./Timeline.css";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Register to Finbills",
    description: "User registers for the platform and sets up their account.",
    image: "/path/to/image1.png", // Replace with actual paths to your images
  },
  {
    id: 2,
    title: "Set Up Inventory",
    description:
      "Set up the inventory and update the stocks using the inventory dashboard.",
    image: "/path/to/image2.png",
  },
  {
    id: 3,
    title: "Monitor Orders",
    description:
      "Input shipping information to monitor orders in real time and track them.",
    image: "/path/to/image3.png",
  },
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [filledSteps, setFilledSteps] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress
        const visibleHeight = Math.min(Math.max(0, windowHeight - top), height);
        const percentage = (visibleHeight / height) * 100;

        // Slowly update progress to avoid abrupt changes
        setProgress((prev) => {
          const difference = percentage - prev;
          return Math.abs(difference) > 0.5 ? prev + difference * 0.1 : prev; // Control the speed of progress
        });

        // Check for filled steps based on the scroll position
        const stepHeight = height / steps.length;
        const newFilledSteps = steps.reduce((acc, step, index) => {
          if (visibleHeight > index * stepHeight) {
            acc.push(step.id);
          }
          return acc;
        }, [] as number[]);

        setFilledSteps(newFilledSteps);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-[1634px] top-[1269px]" ref={timelineRef}>
      <div className="timeline-line">
        <div
          className="timeline-progress"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
      <div className="timeline-steps">
           
        {steps.map((step) => (
          <div key={step.id} className="timeline-step my-40">
            <div
              className={`step-circle ${filledSteps.includes(step.id) ? "filled" : ""}`}
            >
            <div className="step-circle top-[100px]"></div>
              {step.id}
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <img src={step.image} alt={step.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

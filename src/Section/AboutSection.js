import React from 'react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ year, event }) => (
  <div className="mb-4">
    <h4 className="font-bold">{year}</h4>
    <p>{event}</p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="mb-4">
          We are a leading factory specializing in the manufacture of high-quality PS nano plates and diffuser plates.
        </p>
        <div className="timeline">
          <TimelineItem year="2020" event="Factory established." />
          <TimelineItem year="2021" event="xxx." />
          <TimelineItem year="2022" event="xxx." />
          <TimelineItem year="2024" event="xxx." />
        </div>
        <Link to="/about" className="btn btn-secondary mt-4">Learn More</Link>
      </div>
    </section>
  );
};

export default AboutSection;

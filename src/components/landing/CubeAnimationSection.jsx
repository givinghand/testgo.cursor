
import React from 'react';

const CubeElementSet = ({ x, y }) => (
  <div className="cube-group" style={{ '--x': x, '--y': y }}>
    <span className="cube-element" style={{ '--i': 3 }}></span>
    <span className="cube-element" style={{ '--i': 2 }}></span>
    <span className="cube-element" style={{ '--i': 1 }}></span>
  </div>
);

const CubeWrapper = () => (
  <div className="cube-wrapper">
    <CubeElementSet x={-1} y={0} />
    <CubeElementSet x={0} y={0} />
    <CubeElementSet x={1} y={0} />
  </div>
);

export function CubeAnimationSection() {
  return (
    <section className="py-12 md:py-16 bg-card overflow-hidden">
      <div className="cube-animation-section-container">
        <CubeWrapper />
        <CubeWrapper />
        <CubeWrapper />
      </div>
    </section>
  );
}

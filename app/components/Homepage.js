import React from 'react';

export const Homepage = () => {
  return (
    <div>
      <div className="header">
        <h1>The Goal</h1>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '50%' }}>
          <p>
            To implement d3.js as a method for communicating quantitative
            information about crimes committed in Chicago, IL, over the course
            of 2018.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;

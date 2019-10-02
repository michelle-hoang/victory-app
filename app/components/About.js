import React from 'react';

export const About = () => {
  return (
    <div>
      <div className="header">
        <h1>Background Information</h1>
      </div>
      <div className="info">
        <div style={{ width: '35rem' }}>
          <div>
            <p>
              At the start of Stackathon, I (a naive and bright-eyed soul)
              ambitiously set out to make a heat map of crime in Chicago using
              D3.js, also known as "Data-Driven Documents".
              <br /> <br />I underestimated the amount of time needed to learn
              D3.js. Although I was able to make basic graphs using D3, I felt
              dissatisfied with my product. In the last 24 hours of the
              hackathon, I learned how to use Victory.js, a Javascript library
              that is based on D3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

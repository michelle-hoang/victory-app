import React from 'react';

export const About = () => {
  return (
    <div>
      <div className="header">
        <h1>Background Information</h1>
      </div>
      <div>
        <p>
          All data used in this project is publically accessible through the
          City of Chicago Data Portal.
        </p>
        <p>
          The main dataset contains all reported crimes in the city of Chicago,
          from the years 2001 through 2019, excluding the most recent 7 days
          from time of access.
        </p>
        <p>
          Looking at crimes recorded in 2018, I focused four subsets of crime:
          <ul>
            <li>Homicide</li>
            <li>Narcotics</li>
            <li>Weapons Violations</li>
            <li>Interference with a Public Office</li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default About;

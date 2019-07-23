import React from 'react';

export const AboutMe = () => {
  return (
    <div className="mainPage">
      <div className="header">
        <div className="allHeader">
          <h1>ABOUT ME:</h1>
        </div>
        {/* <div>
          <h3> My journey:</h3> <br />
          <br />
          <h3>Me as a series of charts</h3>
          <p> * What I'm doing at this moment (daily schedule)</p>
          <p> * Moving clockface that shows my mood?</p>
          <p> * How I spend my time (yearly average)</p>
          <p> * Pie chart of leisure activities</p>
          <p> * My preferred type of art at different periods in life</p>
          <br />
          <h3> Favorite Places (around the country)</h3> <br />
          <h3> Bingo Game: mo edition</h3> <br />
        </div> */}
        <div className="container" />
      </div>
    </div>
  );
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default AboutMe;

import React from 'react';

export const Resume = () => {
  return (
    <div className="mainPage">
      <div className="header">
        <div className="allHeader">
          <h1>MY RESUME:</h1>
        </div>
        <div />
        <div className="container" />
      </div>
    </div>
  );
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default Resume;

import React from 'react';

export const Why = () => {
  return (
    <div className="mainPage">
      <div className="header">
        <div className="allHeader">
          <h1>Why make changes to your lifestyle?</h1>
        </div>
        <div className="container" />
      </div>
    </div>
  );
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default Why;

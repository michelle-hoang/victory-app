import React from 'react';
import Bar from './Bar';
import Scatter from './Scatter';
import Line from './Line';
import Polar from './Polar';
import StackedBar from './StackedBar';

export const Data = () => {
  return (
    <div>
      <div className="header">
        <h1>Data Visualizations</h1>
      </div>
      <div className="chartContainer">
        <div>Bar Chart</div>
        <Bar />
        <div>Stacked Bar</div>
        <StackedBar />
        <div>Scatter Plot</div>
        <Scatter />
        <div>Line Graph</div>
        <Line />
        <div>Polar Axis</div>
        <Polar />
      </div>
    </div>
  );
};
export default Data;

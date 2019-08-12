import React from 'react';
import StackedBar from './StackedBar';
import Area from './Area';
import GroupedBar from './GroupedBar';
import Radar from './Radar';
import Line from './Line';
import ExpLoader from './ExpLoader';
import ActualLoader from './ActualLoader';

export const Data = () => {
  return (
    <div>
      <div className="header">
        <h1>Data Visualizations</h1>
      </div>
      <div className="chartContainer" style={{ width: '35rem' }}>
        <StackedBar />
        <GroupedBar />
        <Line />
        <Radar />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '50%' }}>
            <ExpLoader />
          </div>
          <div style={{ width: '50%' }}>
            <ActualLoader />
          </div>
        </div>
        <Area />
      </div>
    </div>
  );
};
export default Data;

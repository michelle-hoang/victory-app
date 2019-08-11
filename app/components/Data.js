import React from 'react';
import Bar from './Bar';
import Area from './Area';
import GroupedBar from './GroupedBar';
import Radar from './Radar';
import Morale from './Morale';
import ExpLoader from './ExpLoader';
import ActualLoader from './ActualLoader';

export const Data = () => {
  return (
    <div>
      <div className="header">
        <h1>Data Visualizations</h1>
      </div>
      <div className="chartContainer" style={{ width: '35rem' }}>
        <Bar />
        <GroupedBar />
        <Morale />
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

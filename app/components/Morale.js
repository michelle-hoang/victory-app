import React from 'react';
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory';

export default class Morale extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart>
          <VictoryLabel
            text="Morale over Time"
            x={225}
            y={20}
            textAnchor="middle"
          />
          <VictoryLine
            style={{
              data: { stroke: 'blue' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: 1, y: 5 },
              { x: 2, y: 6 },
              { x: 3, y: 7 },
              { x: 4, y: 7 },
              { x: 5, y: 8 },
              { x: 6, y: 8 },
              { x: 7, y: 7 },
              { x: 8, y: 6 },
              { x: 9, y: 4 },
              { x: 10, y: 4 },
              { x: 11, y: 1 },
              { x: 12, y: 1 },
              { x: 13, y: 0 },
              { x: 14, y: 2 },
              { x: 15, y: 3 },
              { x: 16, y: 2 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

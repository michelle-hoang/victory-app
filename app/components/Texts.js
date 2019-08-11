import React from 'react';
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory';

export default class Texts extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart>
          <VictoryLabel
            text="Incoming vs. Outgoing Text Messages"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 2 },
              { x: 3, y: 2 },
              { x: 4, y: -5 },
              { x: 5, y: -8 },
            ]}
          />
          <VictoryLine
            style={{
              data: { stroke: 'blue' },
              parent: { border: '1px solid #ccc' },
            }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

import React from 'react';
import { VictoryChart, VictoryLine, VictoryLabel, VictoryAxis } from 'victory';

export default class Morale extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart domainPadding={{ y: 30, x: 60 }}>
          <VictoryLabel
            text="Morale over Time"
            x={225}
            y={10}
            textAnchor="middle"
          />
          <VictoryLine
            height={400}
            style={{
              data: { stroke: 'gold' },
              parent: { border: '1px solid #ccc' },
            }}
            interpolation="natural"
            data={[
              { x: 1, y: 5, label: 'day 1' },
              { x: 2, y: 6 },
              { x: 3, y: 8 },
              { x: 4, y: 6 },
              { x: 5, y: 7 },
              { x: 6, y: 5 },
              { x: 7, y: 3 },
              { x: 8, y: 4, label: 'day 2' },
              { x: 9, y: 3 },
              { x: 10, y: 2 },
              { x: 11, y: 1 },
              { x: 12, y: 0.5 },
              { x: 13, y: 0.5, label: 'day 3' },
              { x: 14, y: 1 },
              { x: 15, y: 2 },
              { x: 16, y: 1 },
              { x: 17, y: 2 },
              { x: 18, y: 3, label: 'day 4' },
              { x: 19, y: 3 },
              { x: 20, y: 4 },
            ]}
          />
          <VictoryAxis
            dependentAxis
            label="Level of Morale"
            minDomain={{ y: -1 }}
            maxDomain={{ y: 10 }}
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis />
        </VictoryChart>
      </div>
    );
  }
}

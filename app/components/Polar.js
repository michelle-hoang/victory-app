import React from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis } from 'victory';

export default class Polar extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart polar>
          {['cat', 'dog', 'bird', 'dog', 'frog', 'fish'].map((d, i) => {
            return (
              <VictoryPolarAxis
                dependentAxis
                key={i}
                label={d}
                labelPlacement="perpendicular"
                style={{ tickLabels: { fill: 'none' } }}
                axisValue={d}
              />
            );
          })}
          <VictoryBar
            style={{ data: { fill: 'tomato', width: 25 } }}
            data={[
              { x: 'cat', y: 10 },
              { x: 'dog', y: 25 },
              { x: 'bird', y: 40 },
              { x: 'frog', y: 50 },
              { x: 'fish', y: 50 },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

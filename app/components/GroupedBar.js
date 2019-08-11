import React from 'react';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryLabel } from 'victory';

export default class GroupedBar extends React.Component {
  render() {
    return (
      <div style={{ paddingBottom: '2rem' }}>
        <VictoryChart>
          <VictoryLabel
            text="Expected vs. Actual Time Spent on Activities"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryGroup offset={20} colorScale="qualitative">
            <VictoryBar
              data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
            />
            <VictoryBar
              data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
            />
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

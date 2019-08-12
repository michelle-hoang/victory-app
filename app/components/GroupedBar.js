import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryTooltip,
  VictoryAxis,
} from 'victory';

export default class GroupedBar extends React.Component {
  render() {
    const eventHandler = {
      onMouseOver: () => {
        return [
          {
            target: 'labels',
            mutation: () => ({ active: true }),
          },
        ];
      },
      onMouseOut: () => {
        return [
          {
            target: 'labels',
            mutation: () => ({ active: false }),
          },
        ];
      },
    };

    return (
      <div style={{ paddingBottom: '2rem' }}>
        <VictoryChart>
          <VictoryLabel
            text="Expected vs. Actual Daily Output"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryGroup offset={30} colorScale="qualitative">
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={[
                {
                  x: 'Goal 1',
                  y: 30,
                  label: 'Making progress on my stackathon',
                },
                {
                  x: 'Goal 2',
                  y: 30,
                  label: 'Developing confidence as a programmer',
                },
                { x: 'Goal 3', y: 20, label: 'Mastering D3' },
                {
                  x: 'Goal 4',
                  y: 20,
                  label: 'Generating meaningful work for my portfolio',
                },
              ]}
              events={[
                {
                  target: 'data',
                  eventHandlers: eventHandler,
                },
              ]}
            />
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={[
                {
                  x: 'Goal 1',
                  y: 12,
                  label: 'Making progress on my stackathon',
                },
                {
                  x: 'Goal 2',
                  y: -3,
                  label: 'Developing confidence as a programmer',
                },
                { x: 'Goal 3', y: -5, label: 'Mastering D3' },
                {
                  x: 'Goal 4',
                  y: 5,
                  label: 'Generating meaningful work for my portfolio',
                },
              ]}
              events={[
                {
                  target: 'data',
                  eventHandlers: eventHandler,
                },
              ]}
            />
          </VictoryGroup>
          <VictoryAxis
            dependentAxis
            label="% towards Stackathon Goal"
            minDomain={{ y: 0 }}
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

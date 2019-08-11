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
                  x: 'task 1',
                  y: 40,
                  label: 'Making progress on my stackathon',
                },
                {
                  x: 'task 2',
                  y: 40,
                  label: 'Developing confidence as a programmer',
                },
                { x: 'task 3', y: 50, label: 'Mastering D3' },
                { x: 'task 4', y: 20, label: 'Consuming caffeine' },
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
                  x: 'task 1',
                  y: 20,
                  label: 'Making progress on my stackathon',
                },
                {
                  x: 'task 2',
                  y: -10,
                  label: 'Developing confidence as a programmer',
                },
                { x: 'task 3', y: 10, label: 'Mastering D3' },
                { x: 'task 4', y: 40, label: 'Consuming caffeine' },
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
            label="Percent towards Goal"
            minDomain={{ y: 0 }}
            maxDomain={{ y: 100 }}
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

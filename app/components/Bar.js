import React from 'react';
import {
  VictoryBar,
  VictoryStack,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip,
} from 'victory';

export default class Bar extends React.Component {
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
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart domainPadding={{ x: 50 }}>
          <VictoryLabel
            text="Activities per day of Stackathon"
            x={225}
            y={30}
            textAnchor="middle"
          />
          <VictoryStack
            colorScale={[
              'tomato',
              'orange',
              'gold',
              '#82B756',
              '#4889EA',
              '#3667AF',
            ]}
          >
            <VictoryBar
              labelComponent={<VictoryTooltip />}
              data={[
                {
                  x: 'Day 1',
                  y: 4,
                  label: `Reading Scott Murray's D3 textbook`,
                },
                {
                  x: 'Day 2',
                  y: 5,
                  label: `Reading Scott Murray's D3 textbook`,
                },
                {
                  x: 'Day 3',
                  y: 1,
                  label: `Reading Scott Murray's D3 textbook`,
                },
                {
                  x: 'Day 4',
                  y: 1,
                  label: `Reading Scott Murray's D3 textbook`,
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
                { x: 'Day 1', y: 2, label: 'Watching D3 tutorials' },
                { x: 'Day 2', y: 3, label: 'Watching D3 tutorials' },
                { x: 'Day 3', y: 6, label: 'Watching D3 tutorials' },
                { x: 'Day 4', y: 0.5, label: 'Watching D3 tutorials' },
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
                { x: 'Day 1', y: 3, label: 'Getting help from others' },
                { x: 'Day 2', y: 2, label: 'Getting help from others' },
                { x: 'Day 3', y: 0.2, label: 'Getting help from others' },
                { x: 'Day 4', y: 0.2, label: 'Getting help from others' },
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
                  x: 'Day 1',
                  y: 1,
                  label: 'Pestering Russell with my nonsense',
                },
                {
                  x: 'Day 2',
                  y: 1,
                  label: 'Pestering Russell with my nonsense',
                },
                {
                  x: 'Day 3',
                  y: 0,
                  label: 'Pestering Russell with my nonsense',
                },
                {
                  x: 'Day 4',
                  y: 0,
                  label: 'Pestering Russell with my nonsense',
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
                { x: 'Day 1', y: 1, label: 'Writing failed code' },
                { x: 'Day 2', y: 2, label: 'Writing failed code' },
                { x: 'Day 3', y: 2, label: 'Writing failed code' },
                { x: 'Day 4', y: 8, label: 'Writing actual code' },
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
                  x: 'Day 1',
                  y: 0,
                  label: 'Questioning whether I should give up',
                },
                {
                  x: 'Day 2',
                  y: 0,
                  label: 'Questioning whether I should give up',
                },
                {
                  x: 'Day 3',
                  y: 2,
                  label: 'Questioning whether I should give up',
                },
                {
                  x: 'Day 4',
                  y: 0,
                  label: 'Questioning whether I should give up',
                },
              ]}
              events={[
                {
                  target: 'data',
                  eventHandlers: eventHandler,
                },
              ]}
            />
          </VictoryStack>
          <VictoryAxis
            dependentAxis
            label="Time in hours"
            minDomain={{ y: 0 }}
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis
            label="Stackathon"
            style={{
              axisLabel: { padding: 30 },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

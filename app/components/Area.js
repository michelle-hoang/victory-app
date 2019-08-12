import React from 'react';
import {
  VictoryChart,
  VictoryArea,
  VictoryPortal,
  VictoryScatter,
  VictoryGroup,
  VictoryStack,
  VictoryLegend,
  VictoryLabel,
} from 'victory';

export default class Area extends React.Component {
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
      <div>
        <VictoryChart height={500} scale={{ x: 'time' }}>
          <VictoryLabel
            text="My Apartment During Stackathon"
            x={225}
            y={10}
            textAnchor="middle"
          />
          <VictoryStack colorScale="qualitative">
            <VictoryGroup
              data={[
                { x: 'Day 1', y: 2 },
                { x: 'Day 2', y: 3 },
                { x: 'Day 3', y: 5 },
                { x: 'Day 4', y: 4 },
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter style={{ data: { fill: 'black' } }} />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: 'Day 1', y: 4 },
                { x: 'Day 2', y: 3 },
                { x: 'Day 3', y: 2 },
                { x: 'Day 4', y: 5 },
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter style={{ data: { fill: 'black' } }} />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: 'Day 1', y: 3 },
                { x: 'Day 2', y: 1 },
                { x: 'Day 3', y: 3 },
                { x: 'Day 4', y: 2 },
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter style={{ data: { fill: 'black' } }} />
              </VictoryPortal>
            </VictoryGroup>
            <VictoryGroup
              data={[
                { x: 'Day 1', y: 4 },
                { x: 'Day 2', y: 5 },
                { x: 'Day 3', y: 7 },
                { x: 'Day 4', y: 8 },
              ]}
            >
              <VictoryArea />
              <VictoryPortal>
                <VictoryScatter style={{ data: { fill: 'black' } }} />
              </VictoryPortal>
            </VictoryGroup>
          </VictoryStack>
          <VictoryLegend
            width={40}
            height={50}
            x={50}
            y={40}
            centerTitle
            orientation="vertical"
            gutter={10}
            rowGutter={{ top: 0, bottom: 0 }}
            style={{
              name: { fontSize: 7 },
            }}
            data={[
              { name: `Dan's level of concern`, symbol: { fill: 'orange' } },
              {
                name: '# of half-empty cups on counters',
                symbol: { fill: 'gold' },
              },
              {
                name: '# of dirty clothes on floor',
                symbol: { fill: 'rgb(69, 178, 157)' },
              },
              {
                name: `# of sad plants`,
                symbol: { fill: 'rgb(51, 77, 92)' },
              },
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

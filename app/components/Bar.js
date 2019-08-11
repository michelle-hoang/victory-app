import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

export default class Bar extends React.Component {
  render() {
    return (
      <div>
        <VictoryChart style={{ color: '#3C70C0 ' }} domainPadding={{ x: 40 }}>
          <VictoryBar
            data={[
              { stackathon: 'day 1', actual: 3.21 },
              { stackathon: 'day 2', actual: 3.38 },
              { stackathon: 'day 3', actual: 2.05 },
              { stackathon: 'day 4', actual: 3.71 },
            ]}
            x="stackathon"
            y="actual"
          />
          <VictoryAxis
            label="experiment"
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis
            dependentAxis
            label="activities"
            style={{
              axisLabel: { padding: 40 },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

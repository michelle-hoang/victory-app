import React from 'react';
import {
  VictoryChart,
  VictoryPolarAxis,
  VictoryGroup,
  VictoryTheme,
  VictoryArea,
  VictoryLabel,
} from 'victory';

const characterData = [
  {
    'Physical Strength': +50,
    'Mental Fortitude': +100,
    Fatigue: 20,
    'Emotional Sensitivity': +40,
    Charisma: 50,
  },
  {
    'Physical Strength': +10,
    'Mental Fortitude': +70,
    Fatigue: 100,
    'Emotional Sensitivity': +60,
    Charisma: 10,
  },
];

export default class Radar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.processData(characterData),
      maxima: this.getMaxima(characterData),
    };
  }

  getMaxima(data) {
    const groupedData = Object.keys(data[0]).reduce((memo, key) => {
      memo[key] = data.map(d => d[key]);
      return memo;
    }, {});
    return Object.keys(groupedData).reduce((memo, key) => {
      memo[key] = Math.max(...groupedData[key]);
      return memo;
    }, {});
  }

  processData(data) {
    const maxByGroup = this.getMaxima(data);
    const makeDataArray = d => {
      return Object.keys(d).map(key => {
        return { x: key, y: d[key] / maxByGroup[key] };
      });
    };
    return data.map(datum => makeDataArray(datum));
  }

  render() {
    return (
      <div style={{ marginBottom: '2rem' }}>
        <VictoryChart
          animate={{ duration: 2000, easing: 'bounce' }}
          polar
          theme={VictoryTheme.material}
          domain={{ y: [0, 1] }}
        >
          <VictoryLabel
            text="My Profile Before and After Stackathon"
            x={200}
            y={5}
            textAnchor="middle"
          />
          <VictoryGroup
            colorScale={['tomato', '#3C70C0']}
            style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
          >
            {this.state.data.map((data, i) => {
              return <VictoryArea key={i} data={data} />;
            })}
          </VictoryGroup>
          {Object.keys(this.state.maxima).map((key, i) => {
            return (
              <VictoryPolarAxis
                key={i}
                dependentAxis
                style={{
                  axisLabel: { padding: 10 },
                  axis: { stroke: 'none' },
                  grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
                }}
                tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
                labelPlacement="perpendicular"
                axisValue={i + 1}
                label={key}
                tickFormat={t => Math.ceil(t * this.state.maxima[key])}
                tickValues={[0.25, 0.5, 0.75]}
              />
            );
          })}
          <VictoryPolarAxis
            labelPlacement="parallel"
            tickFormat={() => ''}
            style={{
              axis: { stroke: 'none' },
              grid: { stroke: 'grey', opacity: 0.5 },
            }}
          />
        </VictoryChart>
      </div>
    );
  }
}

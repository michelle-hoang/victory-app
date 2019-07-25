import React from 'react';
import { connect } from 'react-redux';
import { fetchResources } from '../redux/resources';
import { Card, CardGroup } from 'react-bootstrap';

export class AllResources extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchResources();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { resources } = this.props;
    return (
      <div>
        <div className="header">
          <div className="allHeader">
            <h1>Resources:</h1>
          </div>
        </div>
        <div className="cardHouse">
          <CardGroup>
            {resources.map(resource => {
              return (
                <Card
                  key={resource.id}
                  style={{ minWidth: '40%', maxWidth: '40%', height: '20vw' }}
                >
                  <Card.Body>
                    <Card.Title>{resource.name}</Card.Title>
                    <Card.Text>{resource.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  resources: state.resources,
});

const mapDispatch = dispatch => {
  return {
    fetchResources: () => dispatch(fetchResources()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(AllResources);

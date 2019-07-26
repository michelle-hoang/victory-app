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
              const url = resource.imageUrl;
              return (
                <Card
                  key={resource.id}
                  style={{
                    minWidth: '30vw',
                    maxWidth: '30vw',
                    height: '18vw',
                    borderRadius: '15px',
                    border: '1px solid black',
                  }}
                >
                  <Card.Body>
                    <div className="resourceCard">
                      <div className="resourceImg">
                        <Card.Img
                          style={{ width: '100%' }}
                          variant="left"
                          src={url}
                        />
                      </div>
                      <div className="resourceInfo">
                        <Card.Title style={{ fontSize: '2vw' }}>
                          {resource.name}
                        </Card.Title>
                        <Card.Text style={{ fontSize: '1vw' }}>
                          {resource.description}
                        </Card.Text>
                      </div>
                    </div>
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

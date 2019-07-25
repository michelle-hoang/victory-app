import React from 'react';
import { connect } from 'react-redux';
import { fetchPractices } from '../redux/practices';

import { Card, CardGroup, Carousel } from 'react-bootstrap';

export class AllPractices extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchPractices();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { practices } = this.props;
    return (
      <div>
        <div className="header">
          <div className="allHeader">
            <h1>Sustainability Practices:</h1>
          </div>
        </div>

        <CardGroup>
          {practices.map(practice => {
            const url = `art/${practice.imageUrl}`;
            return (
              <Card
                key={practice.id}
                style={{ minWidth: '30vw', maxWidth: '30vw' }}
              >
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>{practice.name}</Card.Title>
                  <Card.Text style={{ textAlign: 'right' }}>
                    {practice.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
        <div className="carouselContainer">
          <Carousel interval={7500}>
            {practices.map(practice => {
              const url = `art/${practice.imageUrl}`;
              return (
                <Carousel.Item key={practice.id}>
                  <img className="d-block w-100" src={url} alt="First slide" />
                  <Carousel.Caption>
                    <h3>{practice.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  practices: state.practices,
});

const mapDispatch = dispatch => {
  return {
    fetchPractices: () => dispatch(fetchPractices()),
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default connect(
  mapState,
  mapDispatch
)(AllPractices);

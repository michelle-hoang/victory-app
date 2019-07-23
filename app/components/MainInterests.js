import React from 'react';
import { connect } from 'react-redux';
import { fetchInterests } from '../redux/interests';
import { Card, CardGroup } from 'react-bootstrap';

export class MainInterests extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchInterests();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { interests } = this.props;
    return (
      <div className="mainPage">
        <div className="header">
          <div className="allHeader">
            <h1>MY INTERESTS:</h1>
          </div>
        </div>
        <CardGroup>
          {interests.map(interest => {
            return (
              <Card
                border="primary"
                key={interest.id}
                style={{ width: '45vw', height: '30vw' }}
              >
                <Card.Body>
                  <Card.Title>{interest.name}</Card.Title>
                  <Card.Text>{interest.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
      </div>
    );
  }
}

const mapState = state => ({
  interests: state.interests,
});

const mapDispatch = dispatch => {
  return {
    fetchInterests: () => dispatch(fetchInterests()),
  };
};

export default connect(
  mapState,
  mapDispatch
)(MainInterests);

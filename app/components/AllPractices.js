import React from 'react';
import { connect } from 'react-redux';
import { fetchPractices } from '../redux/practices';
import { Card, CardGroup } from 'react-bootstrap';

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
        <div>
          <CardGroup>
            {practices.map(practice => {
              const url = `${practice.imageUrl}`;
              return (
                <Card
                  key={practice.id}
                  style={{
                    minWidth: '30vw',
                    maxWidth: '30vw',
                    height: '22vw',
                    borderRadius: '15px',
                    border: '2px solid black',
                  }}
                >
                  <Card.Body>
                    <div className="practiceCard">
                      <div>
                        <Card.Img
                          style={{
                            width: '8vw',
                            height: '8vw',
                            alignItems: 'center',
                            marginBottom: '1vw',
                          }}
                          variant="top"
                          src={url}
                        />
                      </div>
                      <div
                        className="practiceInfo"
                        style={{ alignItems: 'center' }}
                      >
                        <Card.Title style={{ fontSize: '1.5vw' }}>
                          {practice.name}
                        </Card.Title>
                        <Card.Text
                          style={{ fontSize: '1.25vw', textAlign: 'center' }}
                        >
                          {practice.description}
                        </Card.Text>
                        <div className="buttons">
                          <div
                            className="clickable"
                            style={{
                              border: '2px solid #8BBC64',
                              color: 'white',
                              margin: '0.5vw',
                              padding: '0.25vw',
                              paddingLeft: '0.5vw',
                              paddingRight: '0.5vw',
                              backgroundColor: '#8BBC64',
                              width: '4vw',
                              height: '2vw',
                            }}
                          >
                            Edit
                          </div>
                          <div
                            className="clickable"
                            style={{
                              border: '2px solid #ED6A5A',
                              color: 'white',
                              margin: '0.5vw',
                              padding: '0.25vw',
                              paddingLeft: '0.5vw',
                              paddingRight: '0.5vw',
                              backgroundColor: '#ED6A5A',
                              width: '5vw',
                              height: '2vw',
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </CardGroup>
        </div>
        <br />
        <div className="addBar">
          <div
            style={{
              border: '2px solid #3C70C0',
              borderRadius: '15px',
              minWidth: '15vw',
              margin: '0.5vw',
              padding: '0.5vw',
              paddingLeft: '1vw',
              backgroundColor: '#3C70C0',
              alignContent: 'center',
              textAlign: 'center',
              color: 'white',
            }}
          >
            Add Sustainability Tip!
          </div>
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

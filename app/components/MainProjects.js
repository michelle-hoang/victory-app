import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/projects';

import { Card, CardGroup, Carousel } from 'react-bootstrap';

export class MainProjects extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        <div className="header">
          <div className="allHeader">
            <h1>SELECTED WORK:</h1>
          </div>
        </div>

        <CardGroup>
          {projects.map(project => {
            const url = `art/${project.imageUrl}`;
            return (
              <Card
                key={project.id}
                style={{ minWidth: '30vw', maxWidth: '30vw' }}
              >
                <Card.Img variant="top" src={url} />
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text style={{ textAlign: 'right' }}>
                    {project.date}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardGroup>
        <div className="carouselContainer">
          <Carousel interval={7500}>
            {projects.map(project => {
              const url = `art/${project.imageUrl}`;
              return (
                <Carousel.Item key={project.id}>
                  <img className="d-block w-100" src={url} alt="First slide" />
                  <Carousel.Caption>
                    <h3>{project.name}</h3>
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
  projects: state.projects,
});

const mapDispatch = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects()),
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default connect(
  mapState,
  mapDispatch
)(MainProjects);

import React from 'react';

export class Slider extends React.Component {
  render() {
    console.log('PROPS', this.props);
    return (
      <div className="carouselContainer">
        <p> slider </p>
        {/* <Carousel interval={7500}>
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
        </Carousel> */}
      </div>
    );
  }
}

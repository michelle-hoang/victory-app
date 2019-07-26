import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { postPractice } from '../redux/practices';

const defaultState = {
  name: '',
  imageUrl: '',
  description: '',
  resourceId: null,
  errorMessage: '',
};

export class AddPracticeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      // const firstName = event.target.firstName.value;
      // const lastName = event.target.lastName.value;
      // const email = event.target.email.value;
      // const imageUrl = event.target.imageUrl.value;
      // const campusId = event.target.campusId.value;

      const newPractice = await axios.post('/api/practice', this.state); //update axios post route on backend
      this.props.addNewPractice(newPractice.data); //make addNewStudent function and pass it down as props
      this.setState(defaultState);
    } catch (error) {
      this.setState({
        errorMessage: `There was a problem creating the new practice: ${
          error.message
        }`,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="profileHeader">
          <h1>Add Sustainability Practice</h1>
        </div>
        <div className="formBody">
          <div className="formContainer">
            <form onSubmit={this.handleSubmit}>
              <div className="input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={this.state.imageUrl}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="resourceId">Resource Category</label>
                <input
                  type="text"
                  name="resourceId"
                  value={this.state.resourceId}
                  onChange={this.handleChange}
                />
              </div>

              <div className="submit">
                <div
                  type="submit"
                  className="button"
                  onClick={this.handleSubmit}
                >
                  Submit
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//will need to connect component, mapState and mapDispatch

const mapStateToProps = state => ({
  name: state.firstName,
  imageUrl: state.imageUrl,
  description: state.description,
  resourceId: state.resourceId,
  errorMessage: state.errorMessage,
});

const mapDispatchToProps = dispatch => {
  return {
    postPractice: () => dispatch(postPractice()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPracticeForm);

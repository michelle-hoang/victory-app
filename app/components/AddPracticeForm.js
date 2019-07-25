// import React from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { fetchStudents, updateStudents } from '../redux/students';

// const defaultState = {
//   name: '',
//   imageUrl: '',
//   description: '',
//   errorMessage: '',
// };

// export class AddPracticeForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = defaultState;
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     try {
//       // const firstName = event.target.firstName.value;
//       // const lastName = event.target.lastName.value;
//       // const email = event.target.email.value;
//       // const imageUrl = event.target.imageUrl.value;
//       // const campusId = event.target.campusId.value;

//       const newStudent = await axios.post('/api/students/add', this.state); //update axios post route on backend
//       this.props.addNewStudent(newStudent.data); //make addNewStudent function and pass it down as props
//       this.setState(defaultState);
//     } catch (error) {
//       this.setState({
//         errorMessage: `There was a problem creating the new student: ${
//           error.message
//         }`,
//       });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div className="profileHeader">
//           <h1>Add Student</h1>
//         </div>
//         <div className="formBody">
//           <div className="formContainer">
//             <form onSubmit={this.handleSubmit}>
//               <div className="input">
//                 <label htmlFor="firstName">First Name </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={this.state.firstName}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="input">
//                 <label htmlFor="location">Last Name </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={this.state.lastName}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="input">
//                 <label htmlFor="email">Student Email </label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="input">
//                 <label htmlFor="imageUrl">Student Image URL</label>
//                 <input
//                   type="text"
//                   name="imageUrl"
//                   value={this.state.imageUrl}
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="submit">
//                 <div
//                   type="submit"
//                   className="button"
//                   onClick={this.handleSubmit}
//                 >
//                   Submit
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// //will need to connect component, mapState and mapDispatch

// const mapStateToProps = state => ({
//   firstName: state.firstName,
//   lastName: state.lastName,
//   email: state.email,
//   imageUrl: state.imageUrl,
//   campusId: state.campusId,
//   errorMessage: state.errorMessage,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchStudents: () => dispatch(fetchStudents()),
//     updateStudents: () => dispatch(updateStudents()),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddPracticeForm);

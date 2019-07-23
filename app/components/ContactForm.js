import React from 'react';

export const ContactForm = props => {
  return (
    <div className="mainPage">
      <div className="header">
        <div className="allHeader">
          <h1>CONTACT ME:</h1>
        </div>
        <div>
          <div className="formBody">
            <div className="formContainer">
              <form>
                <div>
                  <label htmlFor="Name">Name </label>
                  <input
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={props.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email </label>
                  <input
                    type="text"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="message">Inquiry</label>
                  <input
                    className="desc"
                    type="text"
                    name="message"
                    value={props.message}
                    onChange={props.handleChange}
                  />
                </div>
                <div className="submit">
                  <div className="button" onClick>
                    Submit
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

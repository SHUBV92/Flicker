import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      feedback: "",
      name: "shubinder",
      email: "shubv1992@gmail.com"
    };
    this.handleChange = this.handleChange.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(
      this
    );
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    const templateId = "template_id";

    this.sendFeedback(templateId, {
      message_html: this.state.feedback,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email succesffully sent!");
      })
      // Handle errors here however you like or use React error boundary
      .catch(err =>
        console.error(
          "You have received an Error! : ",
          err
        )
      );
  }

  render() {
    return (
      <form className="test-mailing">
        <h1>Let's see if it works</h1>
        <div>
          <textarea
            id="test-mailing"
            name="test-mailing"
            onChange={this.handleChange}
            placeholder="Post some lorem ipsum here"
            required
            value={this.state.feedback}
            style={{
              width: "100%",
              height: "150px"
            }}
          />
        </div>
        <input
          type="button"
          value="Submit"
          className="btn btn--submit"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default Form;

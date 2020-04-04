import React, { FormEvent } from "react";
import "./contact.css"
// import { useForm } from "../src/hooks/customHooks";
// import { formInitialState } from "../src/constants";
// import { extractPayload } from "../src/utils";

const Contact = () => {
  // const { value: name, bind: bindName, reset: resetName } = useInput("");
  // const { value: phone, bind: bindPhone, reset: resetPhone } = useInput("");
  // const { value: company, bind: bindCompany, reset: resetCompany } = useInput(
  //   ""
  // );
  // const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  // const { value: topic, bind: bindTopic, reset: resetTopic } = useInput("");
//   const formData = useForm(formInitialState);
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     // TODO [GS] 19/03/2020 add extractPayload helper function with tests
//     console.log(
//       `stringified formData: ${JSON.stringify(formData)}; extracted formData:`,
//       extractPayload(formData.formValue)
//     );
//     formData.reset();
//   };

  return (
    <div>
      <div className="contactContainer">
        <div className="contactsHeader">
          <h1>Contact Us</h1>
          <p>
            Buy the best Fragrance candles 
            <br />
            There are few ways... Chose yours!
          </p>
        </div>
        <div className="touch">
          <h2>Get in Touch</h2>
          <p>
            <b>
            Get in touch to buy your Fragrance Candles 
              <br />
              There are few ways.... Choose yours!
            </b>
          </p>
          <h4>Email Us:</h4>
          <p className="p1">email@fragrance&flicker.com</p>
          <h4>Call Us:</h4>
          <p className="p1">+44123456789</p>
          <p className="lighter">
          Ilford, East London
          </p>
        </div>
        {/* <form onSubmit={handleSubmit}>
          {formData.render()} */}
          <label>
            Name
            <input type="text" /> 
            {/* {...bindName}  */}
          </label>
          <label>
            Email
            <input type="email"/> 
            {/* {...bindEmail} /> */}
          </label>
          <label>
            Phone
            <input type="number" />
            {/* {...bindPhone} /> */}
          </label>
          <label>
            Company
            <input type="text" /> 
            {/* {...bindCompany} /> */}
          </label>
          <label className="topic">
            Describe in short your Topic
            <textarea />
             {/* {...bindTopic} /> */}
          </label>
          {/* <button className="submit" type="submit">
            Send
          </button>
        </form> */}
        
      </div>
    </div>
  );
};

export default Contact;

import React, { FormEvent } from "react";
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
        <style jsx>{`
          * {
            box-sizing: border-box;
            font-family: "Courier New, monospace";
            color: white;
          }

          .contactContainer {
            box-sizing: border-box;
            display: grid;
            grid-template-column: 25% 25% 25% 25%;
            grid-template-row: auto;
            grid-template-areas:
              "contact contact  contact contact"
              "touch form form form"
              "touch form form form";
            width: 100%;
            align-items: center;
            padding: 2vmin;
            font-family: "Courier New, monospace";
            background-color: salmon;
            // RGB(0, 107, 189);
            color: white;
          }

          .contactsHeader {
            grid-area: contact;
            justify-self: center;
          }

          .touch {
            grid-area: touch;
            justify-self: left;
          }

          lighter {
            font-weigth: normal;
          }
          h1,
          h2,
          .p1 {
            color: RGB(223, 193, 42);
            font-weight: bold;
          }
          form {
            display: grid;
            grid-area: form;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto;
            margin: 2em;
            max-width: 1000px;
            font-weight: bold;
          }

          .topic {
            grid-column: 1 / 3;
          }
          .submit {
            grid-column: 2 / 2;
          }
          label {
            display: flex;
            flex-direction: column;
            color: white;
            margin-top: 1em;
            margin-left: 1em;
          }

          ::placeholder {
            color: white;
          }

          input,
          textarea,
          button {
            max-width: 100%;
            border: none;
            margin-top: 1em;
            resize: vertical;
            min-height: 30px;
            max-height: 100px;
            font-family: "Courier New, monospace";
            background-color: Salmon;
            
            color: white;
          }
          input,
          textarea {
            border-bottom: 1px solid white;
          }

          button {
            font-size: xx-large;
            font-weight: 800;
            color: RGB(223, 193, 42);
            text-align: end;
          }
          /*to do: Carolina 17/03/2020: make linear transition once chosen final effect to adjust margins as required*/
          input:focus,
          textarea:focus {
            border-bottom: 1px solid #555;
            outline: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Contact;

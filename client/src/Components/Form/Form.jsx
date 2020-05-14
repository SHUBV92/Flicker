import React from "react";

import { SignIn, SignUp } from "./Form.styles.jsx"

const Form = (props) => {
  return (
    <div>
      <section>
        <h2>I already have an account</h2>
        <p>
        <input
        type="email"
        name="Email"
        placeholder="Email"
        />
        </p>
        <p>
        <input
        type="text"
        name="password"
        placeholder="Password"
        />
        </p>
      </section>
      <SignIn>
        <h2>I do not have an account</h2>
        <p>
        <input
        type="text"
        name="Name"
        placeholder="Name"
        />
        </p>
        <p>
        <input
        type="email"
        name="email"
        placeholder="Email"
        />
        </p>
        <p>
        <input
        type="password"
        name="password"
        placeholder="Password"
        />
        </p>
        <p>
        <input
        type="password"
        name="password"
        placeholder="Password"
        />
        </p>
      </SignIn>
    </div>
  );
};
export default Form;

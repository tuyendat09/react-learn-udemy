import React, { useRef } from "react";

export default function Login() {
  const formRefs = useRef({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formRefs.current);
    const formData = Object.keys(formRefs.current).reduce((data, key) => {
      data[key] = formRefs.current[key].value;
      return data;
    }, {});
    console.log("Form Data:", formData);
    // Now you can use formData object containing all input field values
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={(el) => (formRefs.current["email"] = el)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={(el) => (formRefs.current["password"] = el)}
          />
        </div>

        {/* Add more input fields here */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import React, { useState } from "react";
import MacWindow from "./MacWindow";
import "./mail.scss";

const Mail = ({ windowName, setWindowsState }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7b12febc-f71d-4823-a0dc-2c6180255989");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Try Again !");
  };
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="contact-form-section">
        <h2>Get In Touch</h2>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />

          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" placeholder="Enter your phone number" />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message here"
            rows="4"
          ></textarea>

          <button type="submit">Send Message</button>
          <p>{result}</p>
        </form>
      </div>
    </MacWindow>
  );
};

export default Mail;

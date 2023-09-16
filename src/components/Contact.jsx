import React from "react";
import { useState, useRef } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("Data", name, email, message);
  };

  return (
    <div className="p-10">
      {/* dark:bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#28031e] to-[#1d1d1d]  */}
      {/* className="bg-[url('/src/assets/banner-laptop.png')]"> */}
      <h1 className="text-3xl sm:text-5xl text-black dark:text-white font-bold bg-clip-text text-transparent font-bold bg-gradient-to-r from-rose-400 to-purple-800 dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r from-rose-300 to-purple-800 text-center">
        Contact
      </h1>
      <div className="">
        <form onSubmit={onSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <br/>
          <br/>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br/>
          <br/>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
            <br/>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
